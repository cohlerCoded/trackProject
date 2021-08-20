const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()
const app = express()
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
