// Var section

var searchFormEl = $("#search-input");
var button = $("#search-button");
var current = $("#today");
var temprature = $("#weather");


function handleSearchFormSubmit() {
    
    // API for weather
    
    var city = searchFormEl.val()

    var urlRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${city},{state code}&units=imperial&appid=40f3a66d546be5c27e5a38084e2d3425`

    $.ajax({
        url:urlRequest,
        method: "GET",
    }).then(function (response) {
        console.log("Ajax Reponse \n----------");
        console.log(response);
        current.text(new Date().getDate())
        temprature.text(response.list[0].main.temp + " F")

    });
}

button.on("click", () => {
    handleSearchFormSubmit()
});







//add local storage to save previous search
//weather need to include full UV index
// depending on the weather UV index color will need to change color based on weather condition
//weather must include 5 day forecast















// 40f3a66d546be5c27e5a38084e2d3425