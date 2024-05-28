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
        default : 'https://i.seadn.io/gae/5pzW7VzI20nfDGdGuqXQwx4f40qrVyoNtPYw962kR0uCWrVI4ik1npRLDt3pwj7XfQS0MLD9vPucCvxs7cHp0F0R0XDCwX4BNb_r8Q?auto=format&dpr=1&w=3840'
    }
})

const clubProfileSchema = mongoose.model('club', clubSchema);

module.exports = clubProfileSchema