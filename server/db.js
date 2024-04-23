require('dotenv').config({path: "./env_files/.env"})
const mongoose = require('mongoose')

// connection with mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log('MongoDB connected')
    } catch (err) {
        console.log('An error occured', err)
    }
}

module.exports = { connectDB }