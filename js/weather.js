/**
 * Created by benguerenler on 13.04.2018.
 */


function check_form() {
    //document.getElementById("search").innerHTML = London;

    //Get the input and store it in the var
    var search = document.getElementById("searchInput").value;
    newElement();

    //gettingJSON();


    //TO:DO use the search for the get the weather with API
}

function gettingJSON(){
  //  document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4ba63d16825755a279cabc0a923b7b0d&units=metric",function(json){
       // document.write(JSON.stringify(json.main.temp));
        //send the data json to new function
      gotData(json);
    });
}

function gotData(data) {

    var weather = data;
    var weathers = [];
    for (var i =0 ; i<40;)
    {
        weathers.push({
            temperature: weather.list[i].main.temp,
            text: weather.list[i].weather[0].description,
            date: weather.list[i].dt_txt}
    )
     //   document.write( weathers[i].text.toString());
        i = i + 7;
    }

      document.write( weathers[3].date.toString());

}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("searche").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("weatherList").appendChild(li);
    }
    document.getElementById("searche").value = "";

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