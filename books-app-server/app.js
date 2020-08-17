const express = require('express')
const app = express() 
const cors = require('cors')
const booksRouter = require('./routes/books')

// add cors to the middleware 
app.use(cors())
// add books router to the middleware 
app.use('/api/books',booksRouter)

// configure the dotenv 
require('dotenv').config() 


app.listen(process.env.PORT, () => {
    console.log('Server is running...')
})