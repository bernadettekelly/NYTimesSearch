import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Content from '../js/components/Content';

describe('Content component', function() {
	it('Renders the titile and subtitle', function() {
		const title = "titleExample";
		const subtitle = "subtitleExample";
		const news = "articleExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Content title={title} subtitile={subtitle} news={news}/>);
		const result = renderer.getRenderOutput();
	});
});