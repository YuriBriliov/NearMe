const router = require('express').Router();
const { Category } = require('../db/models')


router.get('/', async (req, res) => {
  let data;

  try {
    data = await Category.findAll({raw: true});
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {}
    });
  }
  // console.log(data)
  res.json({ data });
});

module.exports = router;
