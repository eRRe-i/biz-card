const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.set('strictQuery', true)

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection

const profilesRouter = require('./routes/profiles')
app.use(profilesRouter)

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})




app.get("/api", (req, res) => {
    res.json({ users: ["user1", "user2"] })
})

app.listen(5000, () => { console.log("server started on 5000") })