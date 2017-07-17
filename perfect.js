$(document).ready(function() {
  function doWork(name) {
    var website = "https://graphite.sdsc.edu/render/?width=973&height=554&_salt=1499984669.489&target=hosts.SDSC_CI." + name + "_sdsc_edu.Temp_0Eh&from=-1minutes&format=json";
    var poundName = ("\#" + name );
    $.getJSON( website,
        function( data ) {  
          console.log( data );
          var a = data[0];
          var b = a["datapoints"];
          var c = b[0];
          var celciusTemp = c[0];
          console.log(name + "Current Temperature in Celcius: " + celciusTemp);
          function toFahrenheit(celciusTemp)  {
            return 32 + (celciusTemp * 9/5);
          }
          console.log(name + "Current Temperature in Fahrenheit: " + toFahrenheit(celciusTemp));
          var greenNblue = Math.floor(255-((255/31)*(celciusTemp-32)));
          if (celciusTemp >= 63) {
            var greenNblue = 0;
          } else if (celciusTemp <= 32) {
              var greenNblue = 255;
            }
          console.log("gb value: " + greenNblue);
          console.log("rgb(255," + greenNblue + "," + greenNblue + ")");
          $(poundName).css("background-color", ("rgb(255," + greenNblue + "," + greenNblue + ")"));
        });
  }

 setInterval(function(){
   doWork("ham");
   doWork("dough");
   doWork("xigua");
   doWork("yolk");
   doWork("zucchini");
 },5000);


  $("table").hide();
  $("p").hide();
  $("img").click(function(){
    $("p").fadeIn(1000);
    $("table").fadeIn(1000);
  });
});