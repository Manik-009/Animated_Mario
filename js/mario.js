setTimeout(() => {
   document.getElementById("mario").style.display = "block";
}, 1000);
function time() {
   const time = document.getElementById("js");
   const runTime = new Date().getSeconds();
   time.textContent = 388 - runTime;
}
setInterval(time, 100);
function clickme() {
   setTimeout(() => {
      document.getElementById("pehla").style.background = "sienna";
      document.getElementById("pehla").textContent = "";
   }, 3200);
   setTimeout(() => {
      document.getElementById("dusra").style.background = "sienna";
      document.getElementById("dusra").textContent = "";
      document.getElementById("mushrooms").style.display = "block";
   }, 6200);
   setTimeout(() => {
      document.getElementById("tesra").style.background = "sienna";
      document.getElementById("tesra").textContent = "";
   }, 8200);
   setTimeout(() => {
      document.getElementById("mushrooms").style.display = "none";
      document.getElementById("mario").style.filter = "hue-rotate(250deg)";
      document.getElementById("mario").style.height = "50px";
   }, 9500);
   setTimeout(() => {
      document.getElementById("mario").style.filter = "hue-rotate(20deg)";
      document.getElementById("mario").style.height = "60px";
      document.getElementById("wall").style.marginTop = "-20px";
   }, 9700);
   setTimeout(() => {
      document.getElementById("mario").style.filter = "hue-rotate(35deg)";
      document.getElementById("mario").style.height = "70px";
      document.getElementById("wall").style.marginTop = "-40px";
   }, 10000);
   setTimeout(() => {
      document.getElementById("mario").style.filter = "hue-rotate(50deg)";
      document.getElementById("mario").style.height = "80px";
      document.getElementById("wall").style.marginTop = "-50px";
   }, 10000);
   setTimeout(() => {
      document.getElementById("mario").style.filter = "hue-rotate(65deg)";
      document.getElementById("mario").style.height = "90px";
      document.getElementById("wall").style.marginTop = "-50px";
   }, 10300);
   setTimeout(() => {
      document.getElementById("mario").style.filter = "hue-rotate(80deg)";
      document.getElementById("mario").style.height = "100px";
      document.getElementById("wall").style.marginTop = "-50px";
   }, 10600);
   setTimeout(() => {
      document.body.innerHTML = ":) Reload me again & explore more <3 ";
      document.body.style.filter = "drop-shadow(2px 2px 3px tomato)";
      document.body.style.color = "blue";
      document.body.style.fontSize = "3rem";
      document.body.style.fontWeight = "bold";
      document.body.style.background = "url('images/end.jpg') no-repeat";
      document.body.style.textAlign = "center";
      document.body.style.backgroundSize = "100%";
   }, 11000);
}
