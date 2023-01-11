const jwt = require("jsonwebtoken");


const authenticateToken = async (request, response, next ) => {
    const token = req.body.token
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user)=> {
        if(!err) {
            next()
        }
        response.status(400).send(`Invaild`)
    })
    next()
}

module.exports = autharization;