import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import AddNewBook from './components/AddNewBook';
import Register from './components/Register'
import Login from './components/Login'
import MyBooks from './components/MyBooks';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Logout from './components/Logout';
import Home from './components/Home';
import authenticationReducer from './store/reducers/authentication'
import booksReducer from './store/reducers/books'

const rootReducer = combineReducers({
    authReducer: authenticationReducer, 
    bookReducer: booksReducer 
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route path='/' component={Home} exact /  >
            <Route path='/register' component={Register} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/add-book' component={AddNewBook} exact />
            <Route path='/my-books' component={MyBooks} exact />
            <Route path='/logout' component={Logout} exact />
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
