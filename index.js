$("#fetch").on("click", function () {
  $("#result").text("Loading...");
  $("#fetch").attr("disabled", true);
  fetchData("IBM", (res) => {
    $("#result").text(res);
    $("#fetch").attr("disabled", false);
  });
});