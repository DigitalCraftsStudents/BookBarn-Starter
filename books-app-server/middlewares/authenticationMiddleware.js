
const jwt = require('jsonwebtoken')
const models = require('../models')

function authenticate(req, res, next) {

    // get the headers 
    const headers = req.headers['authorization']
    try {
        if (headers) {
            // get the bearer token 
            const token = headers.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            if (decoded) {
                const userId = decoded.userId
                // check in database if userId exists
                models.User.findByPk(userId).then(user => {
                    if (user) {
                        // continue with the original request 
                        next()
                    } else {
                        res.json({ error: 'Unauthorized access' })
                    }
                })

            } else {
                res.json({ error: 'Unauthorized access' })
            }
        } else {
            res.json({ error: 'Missing required headers' })
        }
    } catch (error) {
        res.json({ error: error })
    }


}

module.exports = authenticate

