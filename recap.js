// variable 
var time = '10:15pm';
var bookPrice = 110;
var isWhiteColor = false;

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

// console.log(elementCount);
// console.log(nojidIndex);
// console.log(partners);

// conditionals
/* 
if (bookPrice < 120) {
    console.log('আমি বইটা কিনবো')
}
else {
    console.log('মামা, কিছু ডিসকাউন্ট দেন না!! আপনি না মামা !');
}
 */

// loop
var i = 0;
while (i <= 17) {
    // do some work
    // console.log(i);
    i++;
}

for (var i = 0; i <= 17; i++) {
    // console.log(i);
}

// function

function isMoonUp(time) {
    if (time >= 19 || time <= 5) {
        return true;
    } else {
        return false;
    }
}

var moonStatus = isMoonUp(20);
// console.log(moonStatus);


// let const

// value of variable could change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const myName = 'lal e lal mr. Helal';
// myName = 22; // we cannot reassign a variable with const keyword
// console.log(myName);