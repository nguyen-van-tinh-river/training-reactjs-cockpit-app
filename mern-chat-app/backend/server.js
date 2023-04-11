const express = require('express')
const dotenv = require('dotenv')
const chats = require('./data/data')
const connectDB = require('./config/db')
const colors = require('colors')
const { userRoutes } = require('./routes')
const { notFound, errorHandler } = require('./middlewares')

dotenv.config()
connectDB()

const app = new express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold))
