// Arrays in javascript

const MyArray = [1, 3, 8, 5, 4];

console.log(MyArray[1]);

const MyArray2 = new Array(1,4,6,9,3);

console.log(MyArray2[3]);

// Array Methods 

MyArray.push(22);

console.log(MyArray);

MyArray2.push(34);

console.log(MyArray2);

MyArray.pop();

console.log(MyArray);

MyArray.unshift(22);
console.log(MyArray);

MyArray.shift();
console.log(MyArray);

console.log(MyArray.includes(9));

console.log(MyArray.indexOf(9));

const MyNewArray = MyArray.join();

console.log(MyArray);
console.log(MyNewArray);

console.log(typeof MyArray);
console.log(typeof MyNewArray);

const NArr1 = MyArray.slice(1,3);
console.log(NArr1);
console.log(MyArray);





const marvel = ["Iron Man", "Spider-Man", "Thor"];

const dc = ["Batman", "Superman", "Wonder Woman"];

marvel.push(dc);

console.log(marvel);

const newAr = marvel.concat(dc);
console.log(newAr);

const heros = [...marvel, ...dc];

console.log(heros);

const real_array = [1,2,3,4,[8,9,2],[2,4,3,[2,8,9]]];

console.log(real_array.flat(Infinity));


let score1 = 22;
let score2 = 33;
let score3 = 44;

console.log(Array.of(score1,score2,score3));
