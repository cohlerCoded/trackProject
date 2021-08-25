require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(authRoutes)
app.use(trackRoutes)

mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Connected to mongoDB')
})
mongoose.connection.on('error', (err) => {
  console.error('Can not connect to mongoDB', err)
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
