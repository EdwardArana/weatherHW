// Var section

var searchFormEl = $('#search-input');
var button = $("#search-button");
var current = $("#today");
var temprature = $("#weather");


function handleSearchFormSubmit() {
    
    // API for weather
    
    var city = searchFormEl.val()
    console.log(city);
    var urlRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${city},{state code}&appid=40f3a66d546be5c27e5a38084e2d3425`

   
    $.ajax({
        url:urlRequest,
        method: 'GET',
    }).then(function (response) {
        console.log('Ajax Reponse \n----------');
        console.log(response);
        current.text(new Date().getDate())
        temprature.text(response.list[0].main.temp + " F")

        for(const data of response.list) {
            console.log(data);
            if(data.dt_txt=== "2021-02-26 12:00:00") {
                 current.text(new Date().getDate())
                 temprature.text(data.main.temp + " F")
            }

        }
    });

}

button.on('click', () => {
    handleSearchFormSubmit()
});



//add local storage to save previous search
//weather need to include full UV index
// depending on the weather UV index color will need to change color based on weather condition
//weather must include 5 day forecast
// why isnt api working 
// monday-friday, "hard code"
// set 3 if statmets to loop 
// second apiu request for other dash req


// 40f3a66d546be5c27e5a38084e2d3425