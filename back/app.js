require('dotenv').config();
// const path = require('path')
const express = require('express');
const morgan = require('morgan');
// const redis = require('redis')
const session = require('express-session');
// const RedisStore = require('connect-redis')(session)
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const cardRouter = require('./src/routers/cardRouter');
const userRouter = require('./src/routers/userRouter');
const categoryRouter = require('./src/routers/categoryRouter');
const path = require('path')

const fileUpload = require('express-fileupload')
// const redisClient = redis.createClient()
const PORT = process.env.PORT ?? 3001;

const app = express();

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'smth', // ключ куки
  secret: process.env.SESSION_SECRET, // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 24 * 60 * 60e3 },
};

const sessionParser = session(sessionConfig);
app.use(sessionParser);
app.use(fileUpload())
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(morgan('dev'));

app.use('/', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/card', cardRouter);

app.listen(PORT, () => {
  console.log(`Сервер запускается на ${PORT} порту`);
});
