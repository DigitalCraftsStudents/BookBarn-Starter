const express = require('express')
const router = express.Router() 
const bcrypt = require('bcryptjs');
const models = require('../models')

router.post('/login',(req,res) => {

    const username = req.body.username 
    const password = req.body.password 

    // check for the username 
    models.User.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if(user) {
            // check the password 
            const isPasswordValid = bcrypt.compareSync(password, user.password)
            if(isPasswordValid) {
                res.json({success: true})
            } else {
                res.json({success: false, message: 'Invalid credentials'})
            }
        } else {
            res.json({success: false, message: 'Invalid credentials'})
        }
    }).catch((error) => {
        res.json(error)
    })

})

// /api/register 
router.post('/register',async (req,res) => {

    const username = req.body.username 
    const password = req.body.password 

    // encrypt the password 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = models.User.build({
        username: username, 
        password: hash 
    })

    const existingUser = await models.User.findOne({
        where: {
            username: username 
        }
    })

    console.log(existingUser)

    if(existingUser) {
        res.json({success: false, message: 'User name already exists!'})
        return 
    }
    
    user.save().then((savedUser) => {
        if(savedUser) {
            res.status(200).json({success: true})
        } else {
            res.json({success: false, message: 'Unable to save the user'})
        }
    }).catch((error) => {
        res.json(error)
    })
})


module.exports = router 