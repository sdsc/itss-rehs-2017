/*
$(document).ready(function() {
  $.getJSON( "https://graphite.sdsc.edu/render/?width=586&height=309&_salt=1498583446.605&target=hosts.SDSC_CI.ham_sdsc_edu.Inlet_Temp_04h&from=10%3A00_20170627&until=10%3A15_20170627&format=json",
    function( data ) {  
      console.log( data );
      });
     //});
//});

  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("Current Temperature in Celcius: " + celciusTemp)
  //this is the temp in Celcius!!

var fareinheightTemp = celciusTemp*(9/5) + 32
console.log("Current Temperature in Fareinheight: " + fareinheightTemp)
//this is not needed, just for reference

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