

// Create a new list item when clicking on the "Search" button
function newElement(forecast) {
        $("ul").empty();
        for (var i = 0; i < 5; i++) {
            var li = document.createElement("li");
            var iconurl = "https://openweathermap.org/img/w/" + forecast[i].image.toString() + ".png";
            //var img =   $("#icons").html('<img src="http://openweathermap.org/img/w/' + forecast[i].image + '.png">');

            if (i == 0) {
                var t = document.createTextNode("Date: " + forecast[i].date.toString().substring(8, 10)
                    + "/" + forecast[i].date.toString().substring(5, 7) + " "
                    + "Current Temperature: " + forecast[i].temperature.toString() + " "
                    + "Maximum: " + forecast[i].temperature_max.toString() + " "
                    + "Minimum:  " + forecast[i].temperature_min.toString() + " "
                    + "Description: " + forecast[i].text.toString() + " ");
                var img = document.createElement("img");
                img.src=iconurl;
                img.width=50;
                img.height=50;
                li.appendChild(t);
                li.appendChild(img);
                document.getElementById("myUL").appendChild(li);
                document.getElementById("myInput").value = "";
                

            }
            else {
                var t = document.createTextNode("Date: " + forecast[i].date.toString().substring(8, 10)
                    + "/" + forecast[i].date.toString().substring(5, 7) + " "
                    + "Maximum: " + forecast[i].temperature_max.toString() + " "
                    + "Minimum:  " + forecast[i].temperature_min.toString() + " "
                    + "Description: " + forecast[i].text.toString() + " ");
                var img = document.createElement("img");
                img.src=iconurl;
                img.width=50;
                img.height=50;
                li.appendChild(t);
                li.appendChild(img);
                document.getElementById("myUL").appendChild(li);
                document.getElementById("myInput").value = "";
            }
        }
    }
//Getting data from openweather api
function gettingJSON(){
    var city = document.getElementById("myInput").value;
    if (city === '') {
        alert("You must write something!");
    } else {
        $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4ba63d16825755a279cabc0a923b7b0d&units=metric", function (json) {
            gotData(json);
        });
    }
}
//Get the data from api and put them on the array to use it after.
function gotData(data) {

    var weather = data;
    var weathers = [];
    for (var i =0 ; i<40;i = i + 8)
    {
        weathers.push({
            temperature: weather.list[i].main.temp,
            temperature_max: weather.list[i].main.temp_min,
            temperature_min: weather.list[i].main.temp_max,
            text: weather.list[i].weather[0].main,
            image: weather.list[i].weather[0].icon,
            date: weather.list[i].dt_txt}
        )
    }
    newElement(weathers);
}

