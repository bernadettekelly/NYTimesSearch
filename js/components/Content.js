import React from 'react';
import {connect} from 'react-redux';
import fetchResults from './actions/index';

export default function Content (props) {
	return (
		<section>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</section
		<section>
			<form id="Form"><form action="#" method="post">
				<label for="dateFrom-entry">Enter Start Date</label>
				<input type="date" name="dateFrom-input" id="from">
				<label for="dateTo-entry">Enter End Date</label>
				<input type="date" name="dateTo-input" id="to">
				<button type="submit" className="Search">Search</button>
            </form>
        </section>
    )

    export class GetContent extends react.Component {
    	constructor(props) {
    		super(props);
    		this.fetchResults = this.fetchResults.bind(this);
    	}
    	fetchResults() {
    		this.props.dispatch(actions.fetchResults);
    	}
    }
function ShowSearchResults(data) {
	var results = '';
    for(var index = 0; index < data.length; index++){
    	if (index in data) {
    		result += data[index].result
    	}
    }

    const mapStateToProps = (state, props) => ({
    	Content: state
    });
    //Should Content be there or a prop name?
    export default connect(mapStateToProps)(Content);

};
