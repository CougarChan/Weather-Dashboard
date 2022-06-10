//All Variables


var apikey= "dd39715860743eb42dfc2b0b68182a2b3";
var imgIconCurrenDay = $("#icon-current-day")
var srchHisContEl = $("#search-history")
var citiesUlEl = $("#cities")
var startdate = moment().format('MM-DD-YYYY')
var searchHist = $("#search-history")
var searchBox = $(".search-box")
var inputSearchEl = $("#inputSearch")
var searchBtnEl = $("#search-button")


var getWeatherConditions = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=imperial"
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {    
                
                let currentCity = data.name
                localStorage.setItem(""+data.name,data.name)
                if (!cities.includes(currentCity)) {
                    cities.push(currentCity)    
                }
                //saves cities in local storageg
                
                localStorage.setItem("cities",JSON.stringify(cities))
                displayDailyForecast(currentCity)
                displayCurrentDay(data,currentCity)
                getUVIndex(data.coord.lat,data.coord.lon)
            })
        } else {
            alert("City was not found sorry")
            return false
        }
    })
}


if (!localStorage.getItem("cities")) {
    var cities = [];
} else var cities = JSON.parse(localStorage.getItem("cities"))

