# Book Barn Authentication Using JSON Web Tokens (JWT)

![alt text]("/images/book-barn.png")

In this assignment, you will continue to work on your Book Barn project. Currently, your app does not have any authentication. You will use JSON Web Token (JWT) to protect the server side resources.

**New features are in bold** 

- Allow the user to add new books 

- Allow the user to view all books 

- Allow the user to delete books 

- Allow the user to update books 

- Create separate pages for adding, viewing the books using React Router 

- Allow the user to filter books based on the genre

- Add the ability for the user to add books to their cart. The items count should be stored in Redux Global State

- User should be able to see the cart count in all of the pages. Display the cart count on the upper right hand corner of the page 

- Allow the user to register for a new account 

- Allow the user to login. After successful login, update the isAuthenticated global state to true. 

- Toggle the menu options depending on the user logged in status. The isAuthenticated flag can be stored in Redux global state. 

- Create multiple users managing isAuthenticated, cartCount and favorite books (3 reducers in total) 

- Create action types and update your reducer(s) to use switch statement instead of if-else 

- Create action creators to replace your dispatch action arguments in React components. 

- Take a look at your React components and see if you can update them to be be functional components. 

![JWT Flow Diagram](jwt-flow.png)

- **Allow the user to add username and password to register for the website.** 

- **Add JSONWebToken authentication to the website** 

- **Protect the server resource /my-books. You can only get to my books if you are authenticated.** 

- **Add the ability to logout the user** 

- **Deploy the website and the server separately**
