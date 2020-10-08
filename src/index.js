module.exports = function toReadable (number) {
    const A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const A2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const A3 = ['hundred'];
let a = number.toString().split('');
let volum = a.length;
let res = '';
if (number%100 >= 0 && number%100 < 20 && volum < 3) {
return A1[number%100];
}
if (number%100 > 20 && number%100 < 100 && number%10 != 0 && volum < 3) {
return A2[Math.trunc(number/10)-2]+ ' ' + A1[number%10];  
}
if (number%100 >= 20 && number%100 < 100 && number%10 == 0 && volum < 3) {
return A2[Math.trunc(number/10)-2];  
}  
if (number%100 == 0) { 
return A1[number/100]+ ' ' + A3;
} 
if (number%10 == 0 && number%100 >= 20) {
return A1[Math.trunc(number/100)]+ ' ' +A3+ ' ' +A2[number%100/10-2];
}
if (number%100 < 20) {
return A1[Math.trunc(number/100)]+ ' ' +A3+ ' ' +A1[number%100];
} 
if (number%100 > 20) {    
return A1[Math.trunc(number/100)]+ ' ' +A3+ ' ' +A2[Math.trunc(number%100/10)-2]+ ' ' +A1[number%100%10];
}      

} 
