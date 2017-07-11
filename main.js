/*
function getColor(graphiteData, onComplete) {
  var color = "blue"
  /*$.getJSON( graphiteData, function( data ) {  
    console.log( data );
  
    var a = data[0]
    var b = a["datapoints"]
    var c = b[0]
    var celciusTemp = c[0]
    console.log("Current Temperature in Celcius: " + celciusTemp);
    function toFahrenheit(celciusTemp)  {
      return (9/5) * (celciusTemp+32);
    }
    console.log("Current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp));

    var greenNblue = Math.floor(255-((255/33.5)*(celciusTemp-15.5)))
    if (celciusTemp >= 49) {
      var greenNblue = 0;
    } else if (celciusTemp <= 15.5) {
      var greenNblue = 255;
    } else {
      greenNblue;
    }
    console.log("gb value: " + greenNblue)
    console.log("rgb(255," + greenNblue + "," + greenNblue + ")")
    onComplete(color);
    //return "rgb(255," + greenNblue + "," + greenNblue + ")"
  });
  // end //
}
getColor(graphiteData, function(color) {
  console.log(color);


});

var graphiteData = "https://graphite.sdsc.edu/render/?width=586&height=309&_salt=1499363402.318&target=hosts.SDSC_CI.ham_sdsc_edu.Temp_0Eh&format=json"
console.log(getColor(graphiteData))



$(document).ready(function() {

  var graphite = "https://graphite.sdsc.edu/render/?width=586&height=309&_salt=1499363402.318&target=hosts.SDSC_CI.ham_sdsc_edu.Temp_0Eh&format=json"
  var graphite = "https://graphite.sdsc.edu/render/?width=1151&height=604&_salt=1499361367.469&target=hosts.SDSC_CI.dough_sdsc_edu.Inlet_Temp_04h&from=-24hours&format=json"
    
    
  
    $("table").hide();
    $("p").hide();

    
    });
  $("img").click(function(){
  $("p").fadeIn(1000);
  $("table").fadeIn(1000);
});


//$("#HAM").css("color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));

*/

















































//In case the JavaScript gets totally screwed up...

/*
$(document).ready(function() {

  var graphite = "https://graphite.sdsc.edu/render/?width=586&height=309&_salt=1499363402.318&target=hosts.SDSC_CI.ham_sdsc_edu.Temp_0Eh&format=json"

  $.getJSON( graphite,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return (9/5) * (celciusTemp+32);
  }
  console.log("Current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/33.5)*(celciusTemp-15.5)))

  if (celciusTemp >= 49) {
    var greenNblue = 0;
  } else if (celciusTemp <= 15.5) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#HAM").css("color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });
  });



$("table").hide();
$("p").hide();

$("img").click(function(){
    $("p").fadeIn(1000);
    $("table").fadeIn(1000);
});
*/





















/*
function celciusToGB() {
}

function dataToTemp( data ) {
  return 
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
});
*/







/*var rgbColor = [255, greenNblue, greenNblue]
console.log(rgbColor)
//just for reference- doesn't execute anything
*/

/*
var hypotheticTemp = (Math.floor((Math.random() * 70)+50))
//produces random "temperature" between 50 and 120
console.log("hypothetical temperature:" + hypotheticTemp)
*/

/*
$("p").html(<canvas id="myCanvas" width="300" height="300" style="border:1px solid #000000;"></canvas>
              
<canvas id="myCanvas" width="200" height="150" style="border:1px solid #000000;">
</canvas>);
*/

//rgb(255,255,0));



/*let RGB = rgb
let Red = 255
var Green = greenNblue
var Blue = greenNblue

console.log(RGB.concat(Red, Green, Blue
  )) */




//<link rel="stylesheet" href="style.css">

/*var newStyles = document.createElement('style')
document.head.append(newStyles)
newStyles.innerHTML = ".my-element {" +
  "height: " + height + "px;" +
  "width: 40px;" +
  "color: #9b806b;" +
"}"
*/


//console.log(255, greenNblue, greenNblue)
//this one works too



/*
For 60-110 degrees:
  Formula:
    rgb (255, Math.floor(255-((255/dif)*(currentTemp-minTemp))), Math.floor(255-((255/dif)*(currentTemp-minTemp))))
    rgb (255, Math.floor(255-((255/50)*(currentTemp-60))), Math.floor(255-((255/dif)*(currentTemp-50))))
*/