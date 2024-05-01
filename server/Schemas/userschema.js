const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    uni_id : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    occupation : {
        type : Array,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const registerSchema = mongoose.model('user', userSchema);

module.exports = registerSchema