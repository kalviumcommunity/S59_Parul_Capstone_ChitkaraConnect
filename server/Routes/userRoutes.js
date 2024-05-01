const express = require('express')
const router = express.Router()
const {getAllUsers, registerUsers, loginUser} = require('../Controller/userController')

router.get('/', getAllUsers)
router.post('/register', registerUsers)
router.post('/login', loginUser)

module.exports = router 