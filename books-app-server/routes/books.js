
const express = require('express')
const router = express.Router()
const models = require('../models')

// GET api/books
router.get('/', (req, res) => {
    models.Book.findAll().then(books => res.json(books))
})

// GET api/books/:id 
router.get('/:id', (req, res) => {

    const bookId = parseInt(req.params.id) 

    if (!bookId) {
        res.json('id is required')
        return
    }

    models.Book.findByPk(bookId)
    .then(book => {
        if(book) {
            res.json(book)
        } else {
            res.json({message: `Book with id ${bookId} not found`})
        }
    }).catch((error) => {
        res.json(error)
    })

   
})

// DELETE /api/books
router.delete('/:id', (req, res) => {

    const bookId = req.params.id
    if (!bookId) {
        res.json('id is required')
        return
    }

    models.Book.destroy({
        where: {
            id: bookId
        }
    }).then((bookDeleted) => {
        if(bookDeleted == 1) {
            res.json({success: true, message: 'Book has been deleted'})
        } else {
            res.json({success: false, message: 'Unable to delete the book'})
        }
    }).catch((error) => {
        res.json(error)
    })

})

// POST api/books
router.post('/', (req, res) => {

    // build a sequelize Book model 
    const book = models.Book.build({
        ...req.body, 
        user_id: parseInt(req.body.userId) 
    })

    // save the book
    book.save().then(savedBook => {
      res.json(savedBook)  
    }).catch((error) => {
        res.json(error)
    })

})

// get books by user id 
router.get('/users/:userId',(req,res) => {

    const userId = req.params.userId 
    
    if (!userId) {
        res.json('userId is required')
        return
    }

    models.Book.findAll({
        where: {
            user_id: userId
        }
    }).then((books) => {
        res.json(books)
    }).catch((error) => {
        res.json(error)
    })
})

module.exports = router 
