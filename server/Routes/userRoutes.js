const express = require('express')
const router = express.Router()
const {getAllUsers} = require('../Controller/userController')

router.get('/', getAllUsers)

module.exports = router 