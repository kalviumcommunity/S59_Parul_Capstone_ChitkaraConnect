const cors = require('cors')
const express = require('express')
const App = express()
const { connectDB } = require('./db.js')
const userRoutes = require('./Routes/userRoutes.js')
const clubRoutes = require('./Routes/clubRoutes.js')
const port = process.env.PORT || 8080

connectDB()
App.use(cors())
App.use(express.json())
App.use('/user', userRoutes)
App.use('/api', clubRoutes)

App.listen(port, () => console.log('App starting at', port)) 