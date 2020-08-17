
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

// GET api/books
router.get('/', (req, res) => {
    res.json(global.books)
})

// GET api/books/:id 
router.get('/:id', (req, res) => {

    const bookId = req.params.id
    if (!bookId) {
        res.json('id is required')
        return
    }

    const book = global.books.find(book => book.id == bookId)
    if (book) {
        res.json(book)
    } else {
        res.json({ error: 'Book not found!' })
    }
})

// DELETE /api/books
router.delete('/:id', (req, res) => {

    const bookId = req.params.id
    if (!bookId) {
        res.json('id is required')
        return
    }
    // filter out the book with the suplied id 
    global.books = global.books.filter(book => book.id != bookId)

    res.json({success: true})
})

// POST api/books
router.post('/', (req, res) => {

    const title = req.body.title
    const genre = req.body.genre
    const publisher = req.body.publisher
    const year = req.body.year
    const imageURL = req.body.imageURL

    // create a JS object to represent a book 
    const book = { title, genre, publisher, year, imageURL }
    // generate and assign a unique id 
    book.id = uuidv4()
    // save the book in global books array 
    global.books.push(book)

    res.json(book)
})

module.exports = router 
