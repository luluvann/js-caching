# js-caching

## General overview
1. When the button is clicked, it's calling the function fetchData(symbol,resultCallBack) declared in api.js
```
$("#fetch").on("click", function () {
  $("#result").text("Loading...");
  $("#fetch").attr("disabled", true);
  for (var i = 0; i < 2; i++) {
    fetchData("IBM", (res) => {
      $("#result").text(res);
      $("#fetch").attr("disabled", false);
    });
  }
});
```
