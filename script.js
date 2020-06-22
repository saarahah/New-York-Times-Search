var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20100101&end_date=20200101&q=election&api-key=bZRhs1QXQHZR3SJ15Dz5UukQSXO1bmGs";

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(response)
    })

   