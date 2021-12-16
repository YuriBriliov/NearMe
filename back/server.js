const { Dialog, Message } = require('./src/db/models')




const { createServer } = require('http');
// достать фунцию createServer из библиотеки http
const WebSocket = require('ws');
// подключаем WebSocket из библиотеки
const { app, sessionParser } = require('./app');
// подключаем app  sessionParser

const PORT = process.env.PORT ?? 3001;

const server = createServer(app);
// создаем сервер. вызываем метод createServer с настройками app
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });
// создаем экземпляр WebSocket
const map = new Map();
// чтобы запоминать кто подключен к сессии

server.on('upgrade', (request, socket, head) => {
  // 1) слушаем сервер. это первый момент рукопожатия
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    // 2) вызываем метод sessionParser
    // проверяем авторизован ли пользователь
    // если нет, то разрываем соединение
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    // switch from http to ws
    wss.handleUpgrade(request, socket, head, (ws) => {
      // 3) в нашем соединении переключаем протокол с http на ws
      wss.emit('connection', ws, request);
      // 4)  мы создаем событие connection(или по другому назвать) и передаем что то
    });
  });
});

wss.on('connection', async (ws, request) => {
  // .on типо evenListner
  // 5) когда произойдет событие connection вызывается все ниже
  // и слушаем события дальше
  const { id: userId, name: userName } = request.session.user;
  map.set(userId, ws);
  // устанавливаем в структуру map
  // id в качестве ключа, в качестве значения наше соединение
  ws.on('message', async (message) => {
    // 6) прослушиваем событие message
    // Here we can now use session parameters.
    //
    const parsed = JSON.parse(message);
    // 8) и 15) распарсим объект с front
    // проверяем какой тип и выполняем case
    switch (parsed.type) {
      case `NEW_MESSAGE`:
        console.log('message on back', parsed);
        // push in base
        // если нет диалога, то созадаем,
        // если есть то берем ид диалога и записаваем в 2 таблицу
        // когда отправляется сообщение записывать в базу
        // и вывод всего диалога на фронте
        // страни
        // userId id отправителя
        // Number(parsed.payload.authorId)    id Автора Объявления
        // console.log(userId);
        // console.log(Number(parsed.payload.authorId));
        try {
          let newDialog;
          let idDialog;
          let newDialog1
          newDialog = await Dialog.findOne(
            {
              raw: true, where: {
                sender_id: userId,
                authorCard_id: Number(parsed.payload.authorId),
                service_id: Number(parsed.payload.cardId)
              },
              attributes: [
                'id',
                'sender_id',
                'authorCard_id',
                'service_id'
              ]
            })
          newDialog1 = await Dialog.findOne(
            {
              raw: true, where: {
                sender_id: Number(parsed.payload.authorId),
                authorCard_id: userId,
                service_id: Number(parsed.payload.cardId)
              },
              attributes: [
                'id',
                'sender_id',
                'authorCard_id',
                'service_id'
              ]
            })

          let currentDialog = newDialog || newDialog1
          if (
            currentDialog
          ) {
            console.log(currentDialog, 'aaaaa');
            idDialog = currentDialog.id
            console.log('Диалог есть');

          } else {
            console.log('Диалога Нет');
            currentDialog = await Dialog.create({
              sender_id: userId,
              authorCard_id: Number(parsed.payload.authorId),
              service_id: Number(parsed.payload.cardId)
            })


            currentDialog = await Dialog.findOne(
              {
                raw: true, where: {
                  sender_id: userId,
                  authorCard_id: Number(parsed.payload.authorId),
                  service_id: Number(parsed.payload.cardId)
                },
                attributes: [
                  'id'
                ]
              })

              idDialog = currentDialog.id
          }
          let newMessage = await Message.create({ sender_id: userId, text: parsed.payload.text, dialog_id: idDialog })
          console.log(newMessage);

        } catch (error) {
          console.log(error);
        }
        // console.log(newDialog);
        for (const [key, value] of map) {
          if (key === userId || key === Number(parsed.payload.authorId)) {
            value.send(
              // client.send(
              JSON.stringify({
                type: parsed.type,
                payload: { name: userName, message: parsed.payload.text },
              }),
            );
          }
        }
        map.forEach((client) => {
          // console.log(client);
          // проходим по всем пользователям в нашем соединении
          if (client.readyState === WebSocket.OPEN) {
            // 16) если клиент готов, отправляем тип события и
            // данные пользователя
            // client.send(
            //   JSON.stringify({
            //     type: parsed.type,
            //     payload: { name: userName, message: parsed.payload.text },
            //   }),
            // );
          }
        });
        break;
      case 'CHAT_CONNECT':
        map.forEach((client) => {
          console.log('Connet user');

          // проходим по всем пользователям в нашем соединении
          if (client.readyState === WebSocket.OPEN) {
            // 9) если клиент готов, отправляем тип события и
            // данные пользователя
            client.send(
              JSON.stringify({
                type: parsed.type,
                payload: { name: userName, id: userId },
              }),
            );
          }
        });
        break;

      default:
        break;
    }
  });

  ws.on('close', () => {
    map.delete(userId);
  });
});

server.listen(PORT, () => console.log('Закрутилась шарманка'));
