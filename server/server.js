const express = require('express')
const App = express()
const port = 8080
const { connectDB } = require('./db.js')
const userRoutes = require('./Routes/userRoutes.js')

connectDB()
App.use(express.json())
App.use('/user', userRoutes)

App.listen(port, () => console.log('App starting at', port)) 