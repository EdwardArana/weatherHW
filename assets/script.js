// Var section

var searchFormEl = $('#search-input');
var button = $("#search-button");
var current = $("#today");
var temprature = $("#weather");
var forecast = $(".card-group");


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

function handleSearchFormSubmit() {
    
    // API for weather
    
    var city = searchFormEl.val()
    console.log(city);
    var urlRequest = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=40f3a66d546be5c27e5a38084e2d3425`
    
         var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=40f3a66d546be5c27e5a38084e2d3425`
       
         $.ajax({
            url:forecastUrl,
            method: 'GET',
        }).then(function(res){
            console.log(res);
            forecast.empty()
            var response;
            for (let index = 0; index < res.list.length; index++) {
                if(res.list[index].dt_txt.includes("12:00:00")){
                    console.log(res.list[index])
                    response = res.list[index]
                    const card = $('<div>').addClass("card");
                    // const img = $('<img>').addClass("card-img-top");
                    const cardBody = $('<div>').addClass("card-body");
                    const cardUlEl = $("<ul>").addClass("list-group list-group-flush");
                    const cardListItem1 = $("<li>").addClass("list-group-item").text(response.humidity);
                    const cardListItem2 = $("<li>").addClass("list-group-item").text(response.main.temp);
                    const cardListItem3 = $("<li>").addClass("list-group-item").text(response.dt_txt);
                    cardUlEl.append(cardListItem1, cardListItem2, cardListItem3);
                    cardBody.append(cardUlEl)
                    card.append(cardBody)
                    var weatherIcon = $("<img>");
                    weatherIcon.attr(
                "src",
                "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png", 
                    console.log(weatherIcon)
                )
                
                $("#current-icon").append(weatherIcon);
                    card.append(weatherIcon)
                    forecast.append(card)

                    console.log(response.weather);
                    
            }
        }
        })



    $.ajax({
        url:urlRequest,
        method: 'GET',
    }).then(function (response) {
        console.log('Ajax Reponse \n----------');
        console.log(response);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=40f3a66d546be5c27e5a38084e2d3425`,
            method: 'GET'
        }).then(function(response2) {
            console.log(response2)
            temprature.empty()
            const card = $('<div>').addClass("card");
            // const img = $('<img>').addClass("card-img-top");
            const cardBody = $('<div>').addClass("card-body");
            const cardTitle =$('<h5>').addClass("card-title").text(response.name);
            const cardUlEl = $("<ul>").addClass("list-group list-group-flush");
            const cardListItem1 = $("<li>").addClass("list-group-item").text(response.humidity);
            const cardListItem2 = $("<li>").addClass("list-group-item").text(response.main.temp);
            const cardListItem3 = $("<li>").addClass("list-group-item").text(response2.current.uvi);
            cardUlEl.append(cardListItem1, cardListItem2, cardListItem3);
            cardBody.append(cardTitle)
            cardBody.append(cardUlEl)
            card.append(cardBody)
            temprature.append(card)
            
            console.log(response.weather);
            var weatherIcon = $("<img>");
            weatherIcon.attr(
          "src",
          "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png", 
            console.log(weatherIcon)
        )
        
        $("#current-icon").empty();
        $("#current-icon").append(weatherIcon);

        })

    });

}

button.on('click', () => {
    handleSearchFormSubmit()
});


        var weatherList = localStorage.getItem('weatherList');
        if(weatherList === null){
            localStorage.setItem('weatherList', '[]');
            weatherList = JSON.parse(localStorage.getItem('weatherList'));
        }
        weatherList = JSON.parse(localStorage.getItem('weatherList'));
        console.log(weatherList);


        


// 40f3a66d546be5c27e5a38084e2d3425

// inside IF create DIV, then create section for temp,hum,uv, and icon . then i need to append all of these into the div i created, then append the div with everything in it on page. 

        // const cardText = $('<p>').addClass("card-text").text("Hello");
        // current.text(new Date().getDate())
        // temprature.text(response.list[0].main.temp + " F")

        // for(const data of response.list) {
        //     console.log(data.dt_txt);
        //     console.log(data.dt_txt.includes("12:00:00"));
        //     const date = new Date();
            
        //     if() {
        //         console.log(data.dt_txt);
        //         //  current.text(new Date().getDate())
        //         //  temprature.text(data.main.temp + " F")
        //         // for( let i = 0; i < 5; i++) {
                    
                    
        //             // img.append(cardBody)
        //             card.append(img)
        //             cardBody.append(cardTitle, cardText)
        //             card.append(cardBody)
        //             $(".card-group").append(card);
        //         // }
        //     }
        // }




        // append line 60 on html get card to show info