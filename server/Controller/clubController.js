const clubModel = require('../Schemas/clubSchema')

// for clubs profile
const getClubData = async (req, res) => {
    try {
        const data = await clubModel.find()
        res.status(200).json(data)
    }
    catch (error) {
        console.log('Error while fetching data: ', error.message)
        res.status(500).json({ message: "No data found!" })
    }
}

// get data for an id in clubs profile
const getOneClubData = async (req, res) => {
    try {
        const clubID = req.params.clubID
        const data = await clubModel.findById(clubID)
        if (!data) {
            console.log("Club not found")
            return res.status(404).json({ message: "Club not found" })
        }
        res.status(200).json(data)
    }
    catch (error) {
        console.log('Error while fetching data: ', error.message)
        res.status(500).json({ message: "No data found!" })
    }
}

// to post club data
const postClubData = async (req, res) => {
    const newClub = new clubModel({
        clubName: req.body.clubName,
        clubEmail: req.body.clubEmail,
        clubContact: req.body.clubContact,
        clubSlogan: req.body.clubSlogan,
        clubHeads: req.body.clubHeads,
        clubMentors: req.body.clubMentors,
        clubMembers: req.body.clubMembers,
        clubDesc: req.body.clubDesc
    })
    try {
        const savedClub = await newClub.save()
        res.status(201).json(savedClub)
    }
    catch (error) {
        console.log('Error Posting data: ', error.message)
        res.status(500).json({ message: "Failed to Post. Could not Post data" })
    }
}

module.exports = { getClubData, getOneClubData, postClubData }