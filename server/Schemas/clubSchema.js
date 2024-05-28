const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    clubName : {
        type : String,
        required : true 
    },
    clubEmail : {
        type : String,
        required : true
    },
    clubContact : {
        type : String,
        required : true
    },
    clubSlogan : {
        type : String,
        required : false
    },
    clubHeads : {
        type : Array,
        required : true
    },
    clubMentors : {
        type : Array,
        required : true
    },
    clubMembers : {
        type : Array,
        required : false
    },
    clubDesc : {
        type : String,
        required : true
    },
    clubLogo : {
        type : String,
        required : false
    }
})

const clubProfileSchema = mongoose.model('club', clubSchema);

module.exports = clubProfileSchema