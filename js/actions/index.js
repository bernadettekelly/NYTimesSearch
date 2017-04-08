export const fetchNews = (begin_date, end_date) => dispatch => {
		const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
    console.log(begin_date, end_date);
        $.ajax({
               url: url,
               data: {
               	     begin_date: begin_date.replace(/-/g,''),
               	     end_date: end_date.replace(/-/g,''),
                     apikey: '68c121c921c84a6d9ad8f460a06597ff'
               },
               method: 'GET'
        }).done(function(data){
        	if(data.status !== 'OK'){
        		throw error;        	
            }
            var articles = data.response.docs;
            dispatch(fetchNewsSuccess(articles));
        }).fail(function(err){
        	dispatch(fetchNewsError(err));
          var result = '<p>No results found</p>';
          $('.news_container').html(result);
        });
}

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const fetchNewsSuccess = (articles) => ({
	type: FETCH_NEWS_SUCCESS,
	articles
});

export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
export const fetchNewsError = (error) => ({
	type: FETCH_NEWS_ERROR,
	error

});
