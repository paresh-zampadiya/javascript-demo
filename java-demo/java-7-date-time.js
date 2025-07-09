let myDate = new Date()

console.log(typeof myDate);
console.log(myDate); // 2025-07-09T11:45:00.979Z
console.log(myDate.toString()); // Wed Jul 09 2025 11:45:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Jul 09 2025
console.log(myDate.toISOString()); // 2025-07-09T11:45:00.979Z
console.log(myDate.toJSON()); // 2025-07-09T11:45:00.979Z
console.log(myDate.toLocaleDateString()); //7/9/2025
console.log(myDate.toLocaleString()); // 7/9/2025, 11:45:00 AM
