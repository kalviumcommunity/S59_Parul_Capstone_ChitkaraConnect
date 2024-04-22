const express = require('express')
const App = express()
const port = 8080
const { connectDB } = require('./db.js')

connectDB()

App.listen(port, () => console.log('App starting at', port))