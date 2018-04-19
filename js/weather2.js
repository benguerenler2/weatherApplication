// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");



// Create a new list item when clicking on the "Search" button
function newElement() {
    gettingJSON();
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function gettingJSON(){
    var city = document.getElementById("myInput").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q="+city +"&appid=4ba63d16825755a279cabc0a923b7b0d&units=metric",function(json){
        gotData(json);
    });
}

function gotData(data) {

    var weather = data;
    var weathers = [];
    for (var i =0 ; i<40;i = i + 8)
    {
        weathers.push({
            temperature: weather.list[i].main.temp,
            text: weather.list[i].weather[0].description,
            image: weather.list[i].weather[0].icon,
            date: weather.list[i].dt_txt}
        )
           document.write( weathers[i].image.toString());
    }
   // document.write( weathers.toString());
}