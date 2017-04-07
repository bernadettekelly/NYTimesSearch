import React from 'react';
import {connect} from 'react-redux';
import * as newsActions from './actions/index';

class Content extends react.Component {
	constructor(props) {
		super(props);
		this.fetchNews = this.fetchNews.bind(this);
	}
	fetchNews() {
		this.props.dispatch(newsActions.fetchNews);
	}
	render(){
		const {news} = props;
	
	return (
		<div>
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
       	 <section id = "news_container">
       	 { news.articles.map(function(article){
       	 	return <p>{article.snippet}</p>
    }) }
        </section>
        </div>

    );
  }
};

    const mapStateToProps = (state, props) => ({
    	news: state
    });
   
    export default connect(mapStateToProps)(Content);


