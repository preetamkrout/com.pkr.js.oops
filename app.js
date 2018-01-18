// function Person () {}
// Person.prototype.dance = function () { console.log("Person is dancing"); }


// function Ninja () {}
// Ninja.prototype = new Person();

// let ninja = new Ninja();

// ninja instanceof Ninja ? console.log("ninja is Ninja") : console.error("ERROR: Ninja");
// ninja instanceof Person ? console.log("ninja is Person") : console.error("ERROR: Person");
// ninja instanceof Object ? console.log("ninja is Object") : console.error("ERROR: Object");
// ninja.dance();


// let newObj = { a: 1, b: 2, c: 3};
// let newObjKeys = Object.keys(newObj);

// console.log(newObjKeys);

// let mutatedObj = { a: 1, b: 3, c: 4};
// Object.prototype.keys = function () {
//     let keys = [];
//     for (p in this) keys.push(p);
//     return keys;
// }
// console.log(mutatedObj.keys());
// let newObjKeysAfter = [];
// console.log(newObj.keys());
// for (p in newObj) {
//     newObjKeysAfter.push(p);
// }
// console.log(newObjKeysAfter);

function Person (firstName, lastName) {
    if (!(this instanceof arguments.callee)) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.walk = function (steps) {
    let noOfSteps = steps || 100;
    console.log(`${this.firstName} ${this.lastName} haved walked for ${noOfSteps} today`);
}

function Ninja (firstName, lastName) {
    if (!(this instanceof arguments.callee)) {
        return new Ninja(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}

Ninja.prototype = new Person();

Ninja.prototype.jump = function (buildings) {
    let noOfBuildings = buildings || 100;
    console.log(`${this.firstName} ${this.lastName} haved walked for ${noOfBuildings} today`);
}

const bruce = Person("Bruce", "Wayne"); //Wrong intialization. However, constructor should handle the error for being user-friendly
bruce.walk(240);

const batman = new Ninja("The", "Batman");
batman.walk(255);
batman.jump(3);