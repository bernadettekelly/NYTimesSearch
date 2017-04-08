import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Content from '../js/components/Content';

decribe('Content component', function() {
	it('Renders the titile and subtitle', function() {
		const title = "titleExample";
		const subtitle = "subtitleExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Content title={title} subtitile={subtitle} />);
		const result = renderer.getRenderOutput();
	});
});