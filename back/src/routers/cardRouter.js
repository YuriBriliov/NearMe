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
  const { title, text, price, category_id, user_id, instagram, whatsapp,  telegram, isActive, adress } = req.body;
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      // todo create card without file

    }

    const sampleFile = req.files.file
    const fileName = sampleFile.name.split(' ').join('')
    const fullname = `${new Date().getTime()}_${fileName}`
    const uploadPath = `${process.env.PWD}/public/uploads/`

    sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
      if (err) { return res.status(500).send(err) }

    const newCard = await Card.create({title, text, image: fullname, price, category_id, user_id, instagram, whatsapp,  telegram, isActive, adress}, { returning: true, plain: true })
   
      res.status(200).json(newCard)

    })
  } catch (error) {
    console.log(error)
  }
})

// test for maps
router.get('/test/:id', async (req, res) => {
  
  try {
    if (Number(req.params.id) === 1) {
      let data = await Card.findAll({
        raw: true
      })
      console.log(data)
      res.json(data)
    } else {
      
      let data = await Card.findAll({
        raw: true,
        where: {
          category_id: Number(req.params.id)
        }
      })
      console.log(data)
      res.json(data)
    }
  } catch (error) {
    console.log(error)
  }
})

// обновление карты
router.put('/', async (req, res) => {
  console.log(req.files)
  console.log(req.body)
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      // todo create card without file

    }

    const sampleFile = req.files.file
    const fileName = sampleFile.name.split(' ').join('')
    const fullname = `${new Date().getTime()}_${fileName}`
    const uploadPath = `${process.env.PWD}/public/uploads/`

    sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
      if (err) { return res.status(500).send(err) }

      await Card.update({ ...req.body, image: fullname}, {
            where: {
              id: Number(req.body.id)
            }
          })

      res.sendStatus(200)

    })
  } catch (error) {
  // if(!req.files) // доделать
  // const sampleFile = req.files.file
  // const fileName = sampleFile.name.split(' ').join('')
  // const fullname = `${new Date().getTime()}_${fileName}`
  // const uploadPath = `${process.env.PWD}/public/uploads/`

  // sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
  //   if (err) { return res.status(500).send(err) }

  // try {
  //   await Card.update(req.body, {
  //     where: {
  //       id: Number(req.body.id)
  //     }
  //   })
  //   res.sendStatus(200)
  // } catch (error) {
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
