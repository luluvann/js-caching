function fetchData(symbol, resultCallBack) {
  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`;
  if (apiResultCache[url]) {
    console.log("cache entry found!");
    resultCallBack(apiResultCache[url]);
  } else {
    if (urlInProgress.indexOf(url, 0) === -1) {
      urlInProgress.push(url);
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var result = JSON.stringify(data["Global Quote"]["05. price"]);
          apiResultCache[url] = result;
          console.log("cache updated: " + JSON.stringify(apiResultCache));
          resultCallBack(result);
          var index = urlInProgress.indexOf(url, 0);
          urlInProgress.splice(index, 1);
        });
    } else {
      setTimeout(function () {
        fetchData(symbol, resultCallBack);
      }, 16);
    }
  }
}

var apiResultCache = {};

var urlInProgress = [];
