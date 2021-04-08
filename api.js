function fetchData(symbol, resultCallBack) {
  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`;
  if (apiResultCache[url]) {
    console.log("cache entry found!")
    resultCallBack(apiResultCache[url]);
  } else {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var result = JSON.stringify(data["Global Quote"]["05. price"]);
        apiResultCache[url] = result;
        console.log("cache updated: " + JSON.stringify(apiResultCache));
        resultCallBack(result);
      });
  }
}

var apiResultCache = {};
