// console.log('hello');

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTest } from '../../redux/actions/card.reducer'

const ChatScript = ({ dial, socket }) => {
  let [allMessage, setAllMessage] = useState([])
  let [message, setMessage] = useState('')

  function newMessage(event) {
    setMessage(event.target.value)
  }



  const $form = document.forms.chat;
  // const socket = new WebSocket('ws://localhost:3001');
  const dispatch = useDispatch
  const params = useParams().id
  let arrayId = params.split('_')
  let authorId = arrayId[0]
  let cardId = arrayId[1]
  let senderId = arrayId[2]
  // console.log(senderId);
  // console.log(authorId, 'card', cardId);


  useEffect(() =>
    console.log("Страница ОБНОВИЛАСЬ МЛИН", socket)
    // 
    , [])
  // const herokuUrl = location.origin.replace('http', 'ws');
  // const socket = new WebSocket(window.location.origin.replace('http', 'ws')) // before deploy
  // это настройки для deploy вместо строчки socket

  function sendMessage(e) {
    e.preventDefault();
    dial({ authorId, cardId, senderId })
    console.log(authorId, cardId, senderId);
    // const data = Object.fromEntries(new FormData($form));
    // 14) собираем инфу с инпута
    // парсим
    console.log({ message });
    const jsonData = JSON.stringify({
      type: 'NEW_MESSAGE',
      payload: { text: message, authorId, cardId },
    });

    socket.send(jsonData);
    // отправляем на Бэк
    $form.reset();

  };
  // useEffect(()=>{console.log('OBNOVILSYA!!!')});

  const qwerty = (q) => {
    console.log("QWERTY!!!", q);
    setAllMessage([...allMessage, q]);
    console.log('Work SetMessage');
  }

  useEffect(() => {
    if (socket) {



      // let nameM = ''
      socket.onmessage = (message) => {
        // 10) прослушиваем событие message
        // 17) прослушиваем
        const parsed = JSON.parse(message.data);
        // console.log('======================>',parsed);
        // qwerty(parsed);
        // 11) и 18) парсим ответ с back и смотрим тип и от этого толкаем в case
        console.log('message on front', parsed);

        // console.log(parsed.payload);
        switch (parsed.type) {
          case 'NEW_MESSAGE':
            // 19) вытаскиваем данные
            const { name, message: memberMsg } = parsed.payload;
            qwerty(memberMsg);
            // dispatch(selectTest(nameM))

            // 20) выводим сообщение в чат
            // console.log(name);
            // setAllMessage([...allMessage, 45645])
            // console.log(allMessage);
            // const memberMessageStr = `<p><b>${name}:</b> ${memberMsg}</p>`;
            // $chat.insertAdjacentHTML('beforeend', memberMessageStr);
            break;
          default:
            break;
        }
        // setAllMessage([nameM])
      };
    }
  }, [socket])
  // socket.send()

  return (
    <div className="row py-5">
      <div className="col-4">
        <div className='card'>
          <div className='card-header'>
            Type something
          </div>
          <div className='card-body'>
            <form name='chat' onSubmit={sendMessage} className="row justify-content-end">
              <input name='text' type='text' onChange={newMessage} id='inputMessage' className='form-control' />
              <button type="submit" className="my-1 btn btn-outline-success">OK</button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-8">
        <div className='card'>
          <div className='card-header'>
            Chat
          </div>
          <div id="chatik" className='card-body'>
            {/* {name} */}
            {allMessage.map((e) => {
              return <div>
                {e} говориn
              </div>
            })}
            {/* <div>{allMessage}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatScript;

