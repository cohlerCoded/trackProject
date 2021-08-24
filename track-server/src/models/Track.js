const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    accuracy: Number,
    altitude: Number,
    altitudeAccuracy: Number,
    heading: Number,
    latitude: Number,
    longitude: Number,
    speed: Number,
  },
})

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    default: '',
    required: true,
  },
  locations: [pointSchema],
})

mongoose.model('Track', trackSchema)
