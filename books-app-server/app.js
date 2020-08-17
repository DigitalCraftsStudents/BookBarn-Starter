const express = require('express')
const app = express() 
const cors = require('cors')
const booksRouter = require('./routes/books')
const { v4: uuidv4 } = require('uuid');

// books array using as the database 
// few dummy books already added. 
books = [
    {
    "id": uuidv4(), 
	"title": "Upstream", 
	"genre": "Productivity", 
	"publisher": "Avid Reader Press", 
	"year": "2020", 
    "imageURL": "https://m.media-amazon.com/images/I/41FlPB-c6ML.jpg"
}, 
{   
    "id": uuidv4(), 
	"title": "Building Microservices", 
	"genre": "Programming", 
	"publisher": "O Reilly", 
	"year": "2015", 
    "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51m85J4Zi9L._SX378_BO1,204,203,200_.jpg"
}, 
{
    "id": uuidv4(), 
	"title": "TEACH LIKE FINLAND", 
	"genre": "Education", 
	"publisher": "WW Norton and Company", 
	"year": "2017", 
    "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51Foyh+z5sL._SX329_BO1,204,203,200_.jpg"
}
] 

// add body parser to the middleware
app.use(express.json())
// add cors to the middleware 
app.use(cors())
// add books router to the middleware 
app.use('/api/books',booksRouter)

// configure the dotenv 
require('dotenv').config() 


app.listen(process.env.PORT, () => {
    console.log('Server is running...')
})