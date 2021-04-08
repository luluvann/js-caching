function fetchData(symbol, resultCallBack) {
  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`;
  // if the url has already been searched and therefore if found in the apiResultCache object, the value will be passed as an argument in the resultCallBack(value)
  if (apiResultCache[url]) {
    console.log("cache entry found!");
    resultCallBack(apiResultCache[url]);
  // else, if has never been searched before and therefore if not found in the apiResultCache object, the fetch() is fired and the key-value pair (url-searched:price-resulting-from-the-fetch) is saved in the apiResultCache
  } else {
    // The following if-else statement prevent the same url from being searched multiple times at the same time. If url already being searched (and therefore in the queue), then it will be searched only 16ms later (via setTimeout)
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

// object that will store the url already searched and the result of the fetch api. Key-value pair is url:result-from-fetch
var apiResultCache = {};

// temporary queue list of urls currently in process in the fetchData
var urlInProgress = [];
