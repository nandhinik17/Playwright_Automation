
let uID = Symbol("id");

let test = {
    name: "Automation",
    [uID]: 2
}

test.uID = "1.1";

console.log("Test Name: " + test.name);
console.log("Test UID: " + test[uID]);