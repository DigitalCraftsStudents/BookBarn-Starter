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

 1. Add the ability for the user to add books to their cart. The items count should be stored in Redux global state  

2. User should be able to see the cart count in all of the pages. Display the cart count on the upper right hand corner of the page 

3. Allow the user to register for a new account 

4. Allow the user to login. After successful login, update the isAuthenticated global state to true. 

5. Toggle the menu options depending on the user logged in status. The isAuthenticated flag can be stored in Redux global state. 