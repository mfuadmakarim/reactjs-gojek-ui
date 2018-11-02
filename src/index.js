import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Orders from './components/Orders';
import Help from './components/Help';
import Inbox from './components/Inbox';
import Account from './components/Account';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <div className="wrapper">
    <div className="app-container">

      <Route exact path="/" component={Home} />
      <Route path="/orders" component={Orders} />
      <Route path="/help" component={Help} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/account" component={Account} />
      <Route path="/:active?" component={Navbar} />
    </div>
  </div>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
