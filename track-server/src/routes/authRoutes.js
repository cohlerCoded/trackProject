const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { email, password, phoneNumber } = req.body
  try {
    const userExist = await User.findOne({ email })
    const phoneNumberExist = await User.findOne({ phoneNumber })
    if (userExist) {
      res.status(400)
      throw new Error('User with that email already exist')
    }
    if (phoneNumberExist) {
      res.status(400)
      throw new Error('User with that phone number already exist')
    }
    if (phoneNumber.length !== 16) {
      throw new Error('Phone number must be 10 digits')
    }
    const user = new User({ email, password, phoneNumber })
    await user.save()

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(401)
      .send({ error: 'Must provide a valid email and password.' })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res
      .status(401)
      .send({ error: 'Must provide a valid email and password.' })
  }

  try {
    await user.comparePasswords(password)
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
  } catch (err) {
    return res
      .status(401)
      .send({ error: 'Must provide a valid email and password.' })
  }
})

router.get('/user/:token', async (req, res) => {
  try {
    const { token } = req.params
    const decoded = await jwt.verify(token, 'MY_SECRET_KEY')
    const user = await User.findById(decoded.userId)
    res.json(user)
  } catch (error) {
    return res.status(404).send({ error: 'User not found.' })
  }
})

router.put('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    user.email = req.body.email || user.email
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber

    const updatedUser = await user.save()

    res.json({
      _id: user._id,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

router.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    await User.remove()
    res.json({ message: 'User Removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = router
