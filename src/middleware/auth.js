const jwt = require('jsonwebtoken')
const user = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer','')
        const decoded = jwt.verify(token, 'asdasdookas')
        const user = await User.findbyOne({_id: decoded._id, 'tokens.token': token})

        if(!user) {
            throw new Error()
        }
        req.user = user
        next()
    } catch(e) {
        res.status(401).send({error: "please authenticate"})
    }
}

module.exports = auth;