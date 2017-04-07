export const fetchNews = dispatch => {
	const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
	$.ajax({
		url: url, 
		data: {
			begin_date: '20170401' //new Date()...
			end_date: '20170406'
		},
		method: 'GET'
	}).done(function(data){
		if(data.status !== 'OK'){
			//Throw an error
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

//var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//$.ajax({
//  url: url,
//  begin_date: new Date,
//  end_date: new Date,
//  api_key: '68c121c921c84a6d9ad8f460a06597ff',
//  method: 'GET',
//}).done(function(result) {
//  console.log(result);
//}).fail(function(err) {
//  throw err;
//});
//
//export const GetResults = {
//	type: "GetResults",
//	fail
//	success
//
//}
//
//export const fetchResults = dispatch => {
//	const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json${(fail, success)}`;
//	return $(url).get(response => {
//		if (!response.?) {
//			const error = new Error(response)
//			error.response = response
//			throw error;
//		}
//        return response;
//	})
//};