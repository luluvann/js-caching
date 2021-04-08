# js-caching

## General overview
1. When the button is clicked, it's calling the function fetchData(symbol,resultCallBack) declared in api.js
The second parameter of that function in this example (**res**) "stores" the result from the callback function declared.

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

2. The fetchData function declared in api.js takes two parameters. 
It handles cache saving (if an url has already been searched, it won't make an api call again and it will take the result from the cache) and therefore prevents making multiple api calls on the same url. It also has a queue url search logic where a same url endpoint cannot be called multiple times at the same time, it will wait for the previous call to finish (with setTimeout)