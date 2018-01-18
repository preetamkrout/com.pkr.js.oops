// function Person () {}
// Person.prototype.dance = function () { console.log("Person is dancing"); }


// function Ninja () {}
// Ninja.prototype = new Person();

// let ninja = new Ninja();

// ninja instanceof Ninja ? console.log("ninja is Ninja") : console.error("ERROR: Ninja");
// ninja instanceof Person ? console.log("ninja is Person") : console.error("ERROR: Person");
// ninja instanceof Object ? console.log("ninja is Object") : console.error("ERROR: Object");
// ninja.dance();


let newObj = { a: 1, b: 2, c: 3};
let newObjKeys = Object.keys(newObj);

console.log(newObjKeys);

let mutatedObj = { a: 1, b: 3, c: 4};
Object.prototype.keys = function () {
    let keys = [];
    for (p in this) keys.push(p);
    return keys;
}
console.log(mutatedObj.keys());
let newObjKeysAfter = [];
console.log(newObj.keys());
for (p in newObj) {
    newObjKeysAfter.push(p);
}
console.log(newObjKeysAfter);