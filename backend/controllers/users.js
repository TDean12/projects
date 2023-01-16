const { request, response } = require("express");
const User = require("../models/model");


exports.createUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({
            message: 'error'
        })
    }
    
    try {
        const newUser = await User.create({ email, password })
        res.status(201).json({ message: 'amjilttai burtgelee', user: newUser.email })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'server error',
            error: error
        })
    }
}