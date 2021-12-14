const router = require('express').Router();
const { Card } = require('../db/models')


// взять все карточки
router.get('/', async (req, res) => {
  let data = await Card.findAll({ raw: true})
  // let result = data.json()
  // console.log(data)
  res.json(data)
});


// создание поста
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    
    // console.log(req.body)
    // const { title, img, text } = req.body
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   const newPost = await Sounds.create({ text, title, img, user_id: req.session.user.user_id })
    //   res.json({ text: newPost.text, title: newPost.title, img: newPost.img })
    // }else{
    //   const sampleFile = req.files.file
    //   const fileName = sampleFile.name.split(' ').join('')
    //   const fullname = `${new Date().getTime()}_${fileName}`
    //   const uploadPath = `${process.env.PWD}/public/uploads/`

    //   sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
    //     if (err) { return res.status(500).send(err) }
    //     const newPost = await Sounds.create({ text, title, file: fullname, user_id: req.session.user.user_id })
    //     res.json({ file: newPost.file, img: newPost.img, title: newPost.title, text: newPost.text, id: newPost.id })
    //   })
    // }


    // let data = 
    console.log(req.body);
    await Card.create(req.body, { returning: true, plain: true })
    // let result = data.json()
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

// test for maps
router.get('/test/:id', async (req, res) => {
  // console.log(req.params)
  try {
    if (Number(req.params.id) === 1) {
      let data = await Card.findAll({
        raw: true
      })
      res.json(data)
    } else {
      
      let data = await Card.findAll({
        raw: true,
        where: {
          category_id: Number(req.params.id)
        }
      })
      res.json(data)
    }
  } catch (error) {
    console.log(error)
  }
})

// обновление карты
router.put('/', async (req, res) => {
  try {
    await Card.update(req.body, {
      where: {
        id: Number(req.body.id)
      }
    })
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})


// взять одну карточку
router.get('/:id', async (req, res) => {
  try {
    let data = await Card.findOne({
      raw: true,
      where: {
        id: req.params.id
      }
    })
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})


// удаление карточки
router.delete('/:id', async (req, res) => {
  try {
    await Card.destroy({
      where: {
        id: Number(req.params.id)
      }
    })
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})





module.exports = router;
