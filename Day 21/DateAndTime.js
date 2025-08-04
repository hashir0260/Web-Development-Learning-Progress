let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toJSON());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date("02-04-2005");

console.log(myCreatedDate.toString());

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toJSON());

console.log(myCreatedDate.toISOString());

console.log(myCreatedDate.toLocaleDateString());

console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.toLocaleTimeString());

console.log(typeof myCreatedDate);

let timeStamp = Date.now();

console.log(timeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


