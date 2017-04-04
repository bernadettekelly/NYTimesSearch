var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

export const GetResults = {
	type: "GetResults",
	begin_date: begin_date,
    api_key: '68c121c921c84a6d9ad8f460a06597ff',

}