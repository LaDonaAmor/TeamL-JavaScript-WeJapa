//Converter code
//Global Variables
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const inputValue = document.querySelector(".inputValue");
const convtValue = document.querySelector(".convtValue");
function convert() {
const fromCurrency = from.value;
const toCurrency = to.value;
/*Fetch API data and append 'from' value*/ 
fetch(`https://v6.exchangerate-api.com/v6/a8a53540e8725f4573c8c2ad/latest/${fromCurrency}`)
.then(response => response.json())
.then(data => {
console.log(data);
/*Get 'to' value and display in two decimal places*/
const exchangeRate = data.conversion_rates[toCurrency]; 
convtValue.value = (inputValue.value * exchangeRate).toFixed(2);  
})
}
/*Create Event Listeners */
from.addEventListener('change', convert);
to.addEventListener('change', convert);
inputValue.addEventListener('input', convert);
convtValue.addEventListener('input', convert);
convert();


//Animation code
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
