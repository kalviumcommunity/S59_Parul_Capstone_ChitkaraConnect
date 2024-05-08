const userModel = require('../Schemas/userschema')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        res.status(200).json(allUsers)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error fetching data. Try again later." })
    }
}

const registerUsers = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            console.log("User already exists")
            return res.status(409).json({ message: "User already exists with this email" })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new userModel({
            name: req.body.name,
            uni_id: req.body.uni_id,
            email: req.body.email,
            occupation: req.body.occupation,
            contact: req.body.contact,
            password: hashedPassword
        })
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Registeration failed! Try again later" })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid password"})
        }
        
        res.status(200).json({message: "Login successfull", user})
    } catch(err){
        console.log("Login failed. error:", err)
        res.status(500).json({message: "Login failed! Try again later."})
    }
}


module.exports = { getAllUsers, registerUsers, loginUser }