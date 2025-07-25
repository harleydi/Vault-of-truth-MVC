const express = require('express')
const connectDB = require('./server/config/db')
const userRoutes = require('./server/routes/userRoutes')

// load env variables
require('dotenv').config()


// connect to mongodb
connectDB()

// set port
const PORT = process.env.PORT || 8000

// creating an instance of an express app ?
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded())


// Routes
app.use('/api/users', userRoutes)


// global error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({ error: err })
})

// listen to app on server ?
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
