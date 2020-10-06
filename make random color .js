/* A function to return random number from min to max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  setInterval(function() {
      var element = document.getElementById("box");
      //generate random red, green and blue intensity
      var r = getRandomInt(0, 255);
      var g = getRandomInt(0, 255);
      var b = getRandomInt(0, 255);
      
      element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
  }, 1500);

// Create a hexadecimal value out of range of the Integer type.
r1 = Convert.ToString((long) ,r.MaxValue + 1, 16);
g2 =  Convert.ToString((long) ,g.MaxValue + 1, 16);
b1 =  Convert.ToString((long) ,b.MaxValue + 1, 16);
/* Convert a number to a hexadecmal string with

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