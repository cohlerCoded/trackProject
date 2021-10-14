const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

router.use(requireAuth)

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id })
  res.send(tracks)
})

router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body

  if (!name || !locations)
    return res
      .status(422)
      .send({ error: 'You must provide a name and locations' })
  try {
    const track = new Track({ name, locations, userId: req.user._id })
    await track.save()
    res.send(track)
  } catch (error) {
    return res.status(422).send({ error: err.message })
  }
})

router.delete('/tracks/:id', async (req, res) => {
  const track = await Track.findById(req.params.id)
  if (track) {
    await track.remove()
    res.json({ message: 'Track Removed' })
  } else {
    res.status(404)
    throw new Error('Track Not Found')
  }
})
module.exports = router
