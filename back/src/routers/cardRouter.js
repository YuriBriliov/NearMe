const router = require('express').Router();
const { Card } = require('../db/models')



router.get('/', (req, res) => {
  res.render('newPost');
});

// создание поста
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
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


    let data = await Card.create(req.body, { returning: true, plain: true })
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
