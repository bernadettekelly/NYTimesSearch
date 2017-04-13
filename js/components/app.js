import React from 'react';

import Content from './Content';
import LandingPage from './LandingPage';

export default function App(props) {
	return (
		<div>
			<Content title = "New York Times Search" subtitle="Search Beginning September 18th, 1851"/>
			<LandingPage LPtitle = "New York Times Search" Explanation="New York Times Search allows users to input a start and end date (between September 18th, 1851 and the present) and receive a link, snippet, and lead of articles from that chosen period. Its main purpose is to serve as a browsing tool to stumble upon topics of a particular era."/>
			<div>{props.children}</div>
		</div>
	)	
}

