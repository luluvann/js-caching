$("#fetch").on("click", function(){
    $("#result").text("Loading...")
    $("#fetch").attr("disabled",true)
    fetchData()
})

function fetchData(){
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=ZCER87CRU4VD7SK1")
    .then(function(response){
        return response.json();
    }).then(function(data){
        $("#result").text(JSON.stringify(data["Global Quote"]["05. price"]))
        $("#fetch").attr("disabled",false)
    })
}