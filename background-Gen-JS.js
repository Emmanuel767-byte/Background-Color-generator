var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css2 = document.querySelector("h4");
 function setGradient(){
    body.style.background = 
    "linear-gradient( to right, "
    + color1.value
    +","
    +color2.value
    +(")");
    css.textContent= body.style.background + ";";
}
//Display the initial CSS linear gradient property on page load.
window.onload = function(){
    this.setGradient();
}

// Add a random button which generates two random numbers for the colour inputs.
var RandomBtn = document.getElementById("RandomBtn");

/* A function to return random number from min to max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   function RandomColorCSS(){
    body.style.background = body.style.background = rgbToHex(R, G, B);
    "linear-gradient( to right, "
    + color1.value
    +","
    +color2.value
    +(")");
    css.textContent= body.style.background + ";";
    css2.textContent=  body.style.background =rgbToHex(R, G, B).toString(16);
   }
  
  //generate random red, green and blue intensity
   function randomColor(){
    var R = getRandomInt(0, 255);
    var G = getRandomInt(0, 255);
    var B = getRandomInt(0, 255);
    // Generate color. 
    rgbToHex(R, G, B);
   body.style.background = body.style.background = rgbToHex(R, G, B);
   "linear-gradient( to right, "
   + color1.value
   +","
   +color2.value
   +(")");
   css.textContent= body.style.background + ";";
   css2.textContent=  body.style.background =rgbToHex(R, G, B).toString(16);// Example: #20b9ff
}

   //setGradient();

// RGBtoHEX converter 
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(R, G, B) {
      return "#" + componentToHex(R) + componentToHex(G) + componentToHex(B);
    }
    
/* Convert a number to a hexadecimal string with:
hexString = yourNumber.toString(16);

Convert.ToInt32("string", 16)
function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

console.log(decimalToHexString(27));
 */

//RandomBtn.addEventListener("click", randomColor);

//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);