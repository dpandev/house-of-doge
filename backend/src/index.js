const express = require("express")
const app = express()
const mongoose = require("mongoose")
const helmet = require("helmet")
const morgan = require("morgan")
const dotenv = require("dotenv")

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()
const mongoLink = 'mongodb://db:27017/<db>'
// process.env.MONGO_URI

mongoose.connect(mongoLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((error) => {
    console.error(error)
  })

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}!`)
})