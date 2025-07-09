const scroll = 400
// console.log(scroll);

const totalScroll = new Number(400)
// console.log(totalScroll);
// console.log(totalScroll.toString().length);
// console.log(totalScroll.toFixed(2));

const otherNumber = 123.4567
// console.log(otherNumber.toPrecision(4)); // ex :- 123.5

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // ex :- 10,00,000


// ====================================== maths ====================================== //

// console.log(Math);
// console.log(Math.abs(-4)); // -4 to convert 4
// console.log(Math.abs(4)); // 4 = 4
// console.log(Math.round(4.1)); // 4.5 = 5 && 4.1 = 4
// console.log(Math.ceil(4.1)); // 4.1 = 5  && 4.9 = 5 && 3.9 = 4
// console.log(Math.floor(4.1)); // 4.1 = 4 && 4.9 = 4 && 3.9 = 3
// console.log(Math.min(3, 5, 8, 3)); // 3
// console.log(Math.max(5, 6, 3, 2)); // 6

console.log(Math.random());
console.log((Math.random() * 10) + 1); // not  0 value
console.log(Math.ceil((Math.random() * 10) + 1 )); // not 1.0000 value only 1 , 2 
console.log(Math.floor((Math.random() * 10) + 1 )); // not 1.0000 value only 1 , 2 

const min = 10
const max = 20

console.log(Math.ceil(Math.random() * ( max - min + 1) + min ));
console.log(Math.floor(Math.random() * ( max - min + 1) + min ));
