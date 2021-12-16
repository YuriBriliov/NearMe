const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// регистрация
router.route('/sign_up')
  .post(async (req, res) => {
    try {
      console.log(req.body);
      const {
        email, name, password, phone,
      } = req.body;
      if (email && name && password && phone) {
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
        const currentUser = await User.create({ ...req.body, password: cryptPass });
        req.session.user = { id: currentUser.id, name: currentUser.name, email: currentUser.email };
        // console.log(currentUser.dataValues.id);
        res.status(200).json({
          id: currentUser.dataValues.id,
          name: currentUser.dataValues.name,
          email: currentUser.dataValues.email,
          phone: currentUser.dataValues.phone,
        });
        console.log(`Форма регистрации ушла на фронт,новый пользователь \x1b[42m${name}, ${email}\x1b[0m  зарегестрирован`);
      } else {
        res.sendStatus(400);
        console.log(`Не прошла авторизвция 400 \x1b[34m ${email}\x1b[0m `);

      }
    } catch (error) {
      // console.log('ууупс', email, name, password, phone);
      res.sendStatus(500);
      console.log(`Не прошла авторизвция 500 \x1b[34m ${email}\x1b[0m `);

    }
  });
// Авторизация
router.route('/sign_in')
  .post(async (req, res) => {
    try {
      const { email, password} = req.body;
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.user = { id: currentUser.id, name: currentUser.name };
        res.status(200).json({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone,
        });
        console.log(`Форма аторизации ушла на фронт, пользователь с почтой \x1b[44m ${email}\x1b[0m авторизирован`);
      } else {
        res.sendStatus(400);
        console.log(`Не прошла авторизвция 400 \x1b[34m ${email}\x1b[0m `);

      }
    } catch (err) {
      res.sendStatus(500);
    }
  });

// выход из системы
router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('smth');
    res.sendStatus(200);
  });

// проверка есть ли сессия
router.route('/check')
  .get((req, res) => {
    // console.log(req.session.user);
    if (req.session.user) {
      res.status(200).json(req.session.user);
      console.log('Сервер проверил  \x1b[44m${user}, ${email}\x1b[0m пользователя');
      
    }
  });
module.exports = router;
