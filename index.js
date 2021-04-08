$("#fetch").on("click", function () {
  $("#result").text("Loading...");
  $("#fetch").attr("disabled", true);
  fetchData("IBM", (res) => {
    $("#result").text(res);
    $("#fetch").attr("disabled", false);
  });
});

function fetchData(symbol, resultCallBack) {
  fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var result = JSON.stringify(data["Global Quote"]["05. price"]);
      resultCallBack(result);
    });
}
