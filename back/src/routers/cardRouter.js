const router = require('express').Router();
const { Card } = require('../db/models');

router
// получение всех постов
  .route('/')
  .get(async (req, res) => {
    try {
      const allCards = await Card.findAll({ raw: true, order: [['updatedAt', 'DESC']] });
      res.status(200).json(allCards);
    } catch (error) {
      res.sendStatus(200);
    }
  })
  .post(async (req, res) => {
    try {
      const newCard = {
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
        price: Number(req.body.price),
        user_id: Number(req.body.user_id),
        category_id: Number(req.body.category_id),
        isActive: true
      }
    } catch (error) {
      
    }






    const newPost = {
      title: req.body.title,
      img: req.body.img,
      text: req.body.text,
      price: Number(req.body.price),
      user_id: Number(req.body.user_id),
    };
    try {
      const data = await Card.create(newPost);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.render('error', {
        message: `ууупс, что-то пошло не так:
      - проверь данные которые ввел`,
        error: {},
      });
    }
  });
// добавление


module.exports = router;
