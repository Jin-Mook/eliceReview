import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UserStore from './store/users.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <h1>hello</h1>
        <p>
          <Link to='/useReducer'>reducer</Link>
        </p>
        <Link to='/useContext'>context</Link>
      </Route>
      <Route path='/useReducer'>
        <App randStep={1} min={0} max={10} />
        <App randStep={5} min={0} max={100} />
      </Route>
      <Route path='/useContext'>
        <UserStore>
          <App2 />
        </UserStore>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

