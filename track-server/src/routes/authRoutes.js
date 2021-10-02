const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
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

// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     res.json(user)
//   } catch (error) {
//     return res.status(404).send({ error: 'User not found.' })
//   }
// })

// router.put('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id)
//   if (user) {
//     user.email = req.body.email || user.email
//     user.password = req.body.password || user.password

//     const updatedUser = await user.save()

//     res.json({
//       email: updatedUser.email,
//       password: updatedUser.password,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

module.exports = router
