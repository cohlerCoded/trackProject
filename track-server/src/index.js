const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(authRoutes)

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

app.get('/', (req, res) => {
  res.send('hi there!')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
