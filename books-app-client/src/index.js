import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import BaseLayout from './components/BaseLayout';
import AddNewBook from './components/AddNewBook';
import Register from './components/Register'
import Login from './components/Login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route path= '/' component = {Register} exact /> 
          <Route path= '/login' component = {Login} exact />
          <Route path= '/add-book' component = {AddNewBook} exact /> 
        </BaseLayout>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
