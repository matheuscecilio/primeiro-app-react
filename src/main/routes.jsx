import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Book from '../book/book';
import Home from '../Home/home';
import About from '../about/about';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/livros' component={Book} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/home' />
    </Router>
);