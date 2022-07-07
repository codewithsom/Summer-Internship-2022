// Celsius to Fahrenheit
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var temperature = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(temperature);
}

// Fahrenheit to Celsius
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var temperature = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(temperature);
} 


cToF(60);
fToC(45);
