const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log('==================================', req.body.dialogg);
  // let data = await Card
  // .findAll({ raw: true})
  // // let result = data.json()
  // // console.log(data)
  // res.json(data)
});

module.exports = router;
