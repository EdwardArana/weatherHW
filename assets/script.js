var searchFormEl = $("#search-input");
var button = $("search-button");
var current = $("#today");
var temp = $("weather");

function handleSearchFormSubmit() {
    var city = searchFormEl.val()

    var urlRequest = "https://api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid=40f3a66d546be5c27e5a38084e2d3425"

    $.ajax({
        url:urlRequest,
        method: "GET",
    }).then(function(response) {
        console.log("Ajax Reponse \n----------");
        console.log(response);

    });
}

button.on("click", () => {
    handleSearchFormSubmit()
});























// 40f3a66d546be5c27e5a38084e2d3425