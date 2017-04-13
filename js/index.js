require('babel-polyfill');


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory} from 'react-router';
import Content from './components/Content';
import LandingPage from './components/LandingPage';

import App from './components/app';

const routes = (
	<Router history={hashHistory}>
		<Route path ="/components" component={App}>
			<IndexRoute component={LandingPage}></IndexRoute>
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
			routes, document.getElementById('app')
	)
);
