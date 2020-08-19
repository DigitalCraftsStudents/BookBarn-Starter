# BookBarn-Starter

![Book Barn Screenshot](https://github.com/DigitalCraftsStudents/BookBarn-Starter/blob/master/book-barn.png)

### Setup 

1. Download or clone the project 
2. Go to the **books-app-server** folder and run ```npm install``` 
3. Go to the **books-app-client** folder and run ```npm install``` 

### Running 
1. Go to the **books-app-server** folder and run
```nodemon app.js ```
or ``` node app.js ```
2. Go to the **books-app-client** folder and run ```npm start```

### Notes 
1. This app uses ```"sequelize": "^5.22.3"``` 

### Solution for the following features: 

- Add the capability to allow the user to add books to the cart. The items in the cart will be maintained in the Redux global state.

- Create 2 reducers. One reducer will manage authentication state and the other will manage books. 

- Create action types and update your reducer(s) to use switch statement instead of if-else

- Create action creators to replace your dispatch action arguments in React components.