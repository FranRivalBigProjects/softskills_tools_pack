function calc(){
let a=parseFloat(document.getElementById('a').value)||0;
let b=parseFloat(document.getElementById('b').value)||0;
let c=parseFloat(document.getElementById('c').value)||0;

let score = (a + b + c) / 3;

let resultText = score > 75 ? "High performance 🚀" :
                 score > 40 ? "Moderate performance ⚖️" :
                 "Low performance ⚠️";

document.getElementById('result').innerHTML =
"Score: " + score.toFixed(2) + "<br><br>" + resultText;
}