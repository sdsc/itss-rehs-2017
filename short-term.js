$(document).ready(function() {

//HAM
  var HAM = "https://graphite.sdsc.edu/render/?width=1151&height=604&_salt=1499711058.976&target=hosts.SDSC_CI.ham_sdsc_edu.Temp_0Eh&from=-1minutes&format=json"

  $.getJSON( HAM,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("HAM Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return 32 + (celciusTemp * 9/5);
  }
  console.log("HAM Current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)))

  if (celciusTemp >= 63) {
    var greenNblue = 0;
  } else if (celciusTemp <= 32) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#HAM").css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });
  


//DOUGH
  var DOUGH = "https://graphite.sdsc.edu/render/?width=1198&height=711&_salt=1499708871.69&target=hosts.SDSC_CI.dough_sdsc_edu.Temp_0Eh&from=-1minutes&format=json"

  $.getJSON( DOUGH,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("DOUGH Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return 32 + (celciusTemp * 9/5);
  }
  console.log(" DOUGH current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)))

  if (celciusTemp >= 63) {
    var greenNblue = 0;
  } else if (celciusTemp <= 32) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#DOUGH").css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });

//XIGUA
  var XIGUA = "https://graphite.sdsc.edu/render/?width=1198&height=711&_salt=1499709127.791&target=hosts.SDSC_CI.xigua_sdsc_edu.Temp_0Eh&from=-1minutes&format=json"

  $.getJSON( XIGUA,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("XIGUA Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return 32 + (celciusTemp * 9/5);
  }
  console.log(" XIGUA current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)))

  if (celciusTemp >= 63) {
    var greenNblue = 0;
  } else if (celciusTemp <= 32) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#XIGUA").css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });

//YOLK
  var YOLK = "https://graphite.sdsc.edu/render/?width=1198&height=711&_salt=1499709571.442&target=hosts.SDSC_CI.yolk_sdsc_edu.Temp_0Eh&from=-1minutes&format=json"

  $.getJSON( YOLK,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("YOLK Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return 32 + (celciusTemp * 9/5);
  }
  console.log(" YOLK current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)))

  if (celciusTemp >= 63) {
    var greenNblue = 0;
  } else if (celciusTemp <= 32) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#YOLK").css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });

//ZUCCHINI
  var ZUCCHINI = "https://graphite.sdsc.edu/render/?width=1198&height=711&_salt=1499709736.084&target=hosts.SDSC_CI.zucchini_sdsc_edu.Temp_0Eh&from=-1minutes&format=json"

  $.getJSON( ZUCCHINI,
    function( data ) {  
      console.log( data );   
  var a = data[0]
  var b = a["datapoints"]
  var c = b[0]
  var celciusTemp = c[0]
  console.log("ZUCCHINI Current Temperature in Celcius: " + celciusTemp)
  
  function toFahrenheit(celciusTemp)  {
  return 32 + (celciusTemp * 9/5);
  }
  console.log("ZUCCHINI current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp))
  //console.log(toFahrenheit)
  var fahrenheitTemp = toFahrenheit()

  var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)))

  if (celciusTemp >= 63) {
    var greenNblue = 0;
  } else if (celciusTemp <= 32) {
    var greenNblue = 255;
  } else {
    greenNblue;
  }
  console.log("gb value: " + greenNblue)
  console.log("rgb(255," + greenNblue + "," + greenNblue + ")")


  $("#ZUCCHINI").css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
      });














 });
$("table").hide();
$("p").hide();

$("img").click(function(){
    $("p").fadeIn(1000);
    $("table").fadeIn(1000);
});