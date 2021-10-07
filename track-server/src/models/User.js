const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

// userSchema.methods.comparePasswords = async function (enteredPassword) {
//   console.log('enteredPassword')
//   return await bcrypt.compare(enteredPassword, this.password)
// }

userSchema.methods.comparePasswords = function comparePasswords(
  enteredPassword
) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(enteredPassword, this.password, (err, isMatch) => {
      if (err) {
        return reject(err)
      } else if (!isMatch) {
        return reject(false)
      } else {
        return resolve(true)
      }
    })
  })
}

mongoose.model('User', userSchema)
