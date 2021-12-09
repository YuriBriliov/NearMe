const path = require('path')
const express = require('express')
const morgan = require('morgan')

const PORT = 3001
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`Сервер запускается на ${PORT} порту`)
})
