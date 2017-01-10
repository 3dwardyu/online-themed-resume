document.addEventListener("DOMContentLoaded", function(event){
  var currentTime = new Date();
  var timeNow = currentTime.getHours() + " : " + currentTime.getMinutes();
  console.log(timeNow);
  document.getElementById("time").innerHTML = timeNow;

})
