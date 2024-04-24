const userModel = require('../Schemas/userschema')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        res.status(200).json(allUsers)
    }
    catch (error) {
        console.log("Error fetching data:", error)
        res.status(500).json({ error: "Error fetching data. Try again later." })
    }
}



module.exports = {getAllUsers}