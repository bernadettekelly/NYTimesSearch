import React from 'react';

export default function Content (props) {
	return (
		<section>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</section
		<section>
			<form id="Form"><form action="#" method="post">
				<label for="month-entry">Enter Month</label>
				<input type="text" name="month-input" id="month-input">
				<label for="year-entry">Enter Year</label>
				<input type="text" name="year-input" id="year-input">
				<button type="submit" className="Search">Search</button>
            </form>
        </section>
    )
}

function ShowSearchResults(data) {
	var results = '';
    for(var index = 0; index < data.length; index++){
    	if (index in data) {
    		result += data[index].result
    	}
    }

};