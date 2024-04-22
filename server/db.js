require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log('MongoDB connected')
    } catch (err) {
        console.log('An error occured', err)
    }
}

module.exports = { connectDB }