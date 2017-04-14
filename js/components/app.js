import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Content from './Content';
import LandingPage from './LandingPage';

const LandingPageWrapper = function() {
	return (
		<LandingPage 
			LPtitle = "New York Times Search" 
			Explanation="New York Times Search allows users to input a start and end date (between September 18th, 1851 and the present) and receive a link, snippet, and lead of articles from that chosen period. Its main purpose is to serve as a browsing tool to stumble upon topics of a particular era."/>
	);
}

const ContentWrapper = function() {
	return (
		<Content 
			title = "New York Times Search" 
			subtitle="Search Beginning September 18th, 1851"/>
	);
}

export default function App(props) {
	return (
		<main>
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={LandingPageWrapper} />
					<Route path="search" component={ContentWrapper} />
				</Router>
			</Provider>
			
		</main>
	)
}
