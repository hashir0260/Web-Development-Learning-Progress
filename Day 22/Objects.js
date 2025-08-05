// Object literals

const mySym = Symbol();
const user = {

    name: "Hashir Ali",
    age: 20,
    [mySym]: "This is a Symbol",
    "car owner": "Suzuki Cultus",
    location: "Pakistan, Wahcantt",
    gmail: "hashirali0260@gmail.com",
    skills: ["Html", "CSS","Javascript"]

}

console.log(user);

console.log(user.name);
console.log(user["name"]);
console.log(user["car owner"]);
console.log(user[mySym]);
console.log(typeof mySym);

// user.name = "Hashu";

// Object.freeze(user);

// user.name = "Dev With Hashir";

console.log(user.name);

user.greeting = function() {

    console.log("Hello, World!");
}

console.log(user.greeting());

user.func2 = function() {
    console.log(`Hello! ${this.name}`);
    
}

console.log(user.func2());
