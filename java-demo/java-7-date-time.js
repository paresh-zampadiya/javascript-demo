let myDate = new Date()

console.log(typeof myDate);
console.log(myDate); // 2025-07-09T11:45:00.979Z
console.log(myDate.toString()); // Wed Jul 09 2025 11:45:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Jul 09 2025
console.log(myDate.toISOString()); // 2025-07-09T11:45:00.979Z
console.log(myDate.toJSON()); // 2025-07-09T11:45:00.979Z
console.log(myDate.toLocaleDateString()); //7/9/2025
console.log(myDate.toLocaleString()); // 7/9/2025, 11:45:00 AM

// let myTodayDate = new Date(2025 , 6, 11)
// console.log(myTodayDate.toDateString());  // Fri Jul 11 2025

// let myTodayDate = new Date(2025 , 6, 11, 5, 20)
// console.log(myTodayDate.toLocaleString());  // 7/11/2025, 5:20:00 AM

// let myTodayDate = new Date("2025-5-10") // yyyy-mm-dd
// console.log(myTodayDate.toLocaleDateString()); // 5/10/2025

// let myTodayDate = new Date("2025-12-15") // yyyy-mm-dd
// console.log(myTodayDate.toLocaleString()); // 5/10/2025, 12:00:00 AM

// let myTodayDate = new Date("2025-5-10")
// console.log(myTodayDate.getTime()); // 1746835200000

// let mySetDate = Date.now()
// console.log(mySetDate); // 1752148149659

// let mySetDate = Date.now()
// console.log(Date.now() / 1000); // 1752148238.995

let mySetDate = Date.now()
console.log(Math.floor(Date.now() / 1000)); // 1752148255

let newDate = new Date()
console.log(newDate); // 2025-07-11T04:58:54.285Z
console.log(newDate.getDate()); // 11 date
console.log(newDate.getDay()); // week day count = 5 - friday
console.log(newDate.getMonth() + 1); // month 7 july
console.log(newDate.getFullYear()); // 2025 year


// `${newDate.getDay()} today `

newDate.toLocaleString('default' , {
    weekday : 'long'
})

console.log(newDate);