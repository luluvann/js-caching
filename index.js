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
