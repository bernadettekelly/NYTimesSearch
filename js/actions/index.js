export const fetchNews = dispatch => {
		const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json${(fail, success)}`;
        $.ajax({
               url: url,
               data: {
               	     begin_date: '20170403'
               	     end_date: '20170404'
               },
               method: 'GET'
        }).done(function(data){
        	if(data.status !== 'OK'){
        		throw error;        	}
            }
            var articles = data.response.docs;
            dispatch(fetchNewsSuccess(articles));
        }).fail(function(err){
        	dispatch(fetchNewsError(err));
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
