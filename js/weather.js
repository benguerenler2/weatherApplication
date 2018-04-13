/**
 * Created by benguerenler on 13.04.2018.
 */

var request = new XMLHttpRequest();
request.open('GET', '/api/location/search/?query=(query)', true);
request.onload = function () {
    // Begin accessing JSON data here
}
// Send request
request.send();

var data = JSON.parse(this.response);

/**
data.forEach(movie => {
    // Log each movie's title
    console.log(movie.title);
});
 **/

function check_form() {
    document.getElementById("search").innerHTML = "";

    //Get the input and store it in the var
    var search = document.getElementById("searchInput").value;
    
    //TO:DO use the search for the get the weather with API

}