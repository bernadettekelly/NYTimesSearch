import React from 'react';
import {connect} from 'react-redux';
import * as newsActions from '../actions/index';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.fetchNews = this.fetchNews.bind(this);
	}
	fetchNews(event) {
		event.preventDefault()
		this.props.dispatch(newsActions.fetchNews(this.refs.from.value, this.refs.to.value));
	}
	render(){
		console.log(this.props);
		const {news} = this.props;
	
	return (
		<div>
			<section id = "header_container">
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</section>
			<section>
				<form id="Form" onSubmit = {this.fetchNews} form action="#" method="post">
					<label htmlFor="from">Enter Start Date</label>
					<input type="date" ref = "from" name="dateFrom-input" id="from"/>
					<label htmlFor="to">Enter End Date</label>
					<input type="date" ref = "to" name="dateTo-input" id="to"/>
					<button type="submit" className="Search">Search</button>
            	</form>
            </section>
       	 <section id = "news_container">
       	 <div className="box">
         	<article className="media">
            	<div className="media-left">
      				<figure className="image is-64x64">
        				<img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
      				</figure>
    			</div>
    			<div className="media-content">
      			<div className="content">
        		<p>
       	 		<div>{news.error}</div>
       	 		{ news.articles.map(function(article, index){
       	 		return <div key={index}>
       	 		<a href={article.web_url}>Link</a>
       	    	<p>{article.snippet}</p> 
       	    	<p>{article.lead_paragraph}</p>
       	    	</div>
       	    	</p>
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


