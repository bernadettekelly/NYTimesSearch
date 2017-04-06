var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
  url: url,
  begin_date: new Date,
  end_date: new Date,
  api_key: '68c121c921c84a6d9ad8f460a06597ff',
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

export const GetResults = {
	type: "GetResults",
	fail
	success

}

export const fetchResults = dispatch => {
	const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json${(fail, success)}`;
	return $(url).get(response => {
		if (!response.?) {
			const error = new Error(response)
			error.response = response
			throw error;
		}
        return response;
	})
};