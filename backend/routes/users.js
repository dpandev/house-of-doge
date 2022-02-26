const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")

router.get("/", async (req, res) => {
  const userId = req.query.userId
  const username = req.query.username
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username})
    const { email, password, user_type, account, ...other } = user._doc
    res.status(200).json(other)
  } catch(error) {
    res.status(500).json(error)
  }
})

router.get("/all", async (req, res) => {
  try {
    const users = await await User.find({})

    res.status(200).json(users)
  } catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router