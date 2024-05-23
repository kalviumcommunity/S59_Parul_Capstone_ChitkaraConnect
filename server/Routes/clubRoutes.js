const express = require('express')
const router = express.Router()
const { getClubData, getOneClubData, postClubData } = require('../Controller/clubController')

router.get('/clubs', getClubData);
router.get('/club/:clubID', getOneClubData);
router.post('/clubs', postClubData);

module.exports = router 