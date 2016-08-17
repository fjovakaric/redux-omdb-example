import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import HomePage from './pages/home/home.container';
import MoviesPage from './pages/movies/movies.container';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/movies" component={MoviesPage}/>
    </Route>
);