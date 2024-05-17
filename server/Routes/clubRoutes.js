const express = require('express')
const router = express.Router()
const { getClubData, getOneClubData } = require('../Controller/clubController')

router.get('/clubs', getClubData)
router.get('/clubs/:clubID', getOneClubData);

module.exports = router 