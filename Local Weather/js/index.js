/* 
  Function for data ---unsing jQuery for this!
 */
var api = "https://fcc-weather-api.glitch.me/api/current?";//Free Code Camp Weather API
var lat, lon;
var currentTempInCelsius;

$( document ).ready(function()
{
  // Getting geoloaction of the user!
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) 
    {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {// Catch error!
    console.log("Sorry! Geolocation is not supported by your browser.");
  }
// Function to parse data from API url's
function getWeather(lat, lon) 
{
  var urlString = api + lat + "&" + lon;// Built url string
  $.ajax({
    url: urlString, success: function (result) 
    {
      $("#Location").text(result.name);
      TempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#Temp").text(TempInCelsius + " " + String.fromCharCode(176) + " Celsius");
      $("#Goingon").text(result.weather[0].main);// Rain, cloudy, sunny ect...
      }
  });
}
// Buttons functions
$(".button1").click(function() 
{
   $("#Temp").text(TempInCelsius + " " + String.fromCharCode(176)+ " Celsius");
 });
$(".button2").click(function() 
{
   TempInFahrenheit = Math.round(parseInt($("#Temp").text()) * 9 / 5 + 32);
   $("#Temp").text(TempInFahrenheit + " " + String.fromCharCode(176) + " Fahrenheit");
 });
});
