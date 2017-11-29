// import validate from "./StaticZipCodeValidator";

// let strings = ["Hello", "98052", "101"];

// // Use function validate
// strings.forEach(s => {
//     console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
// });

import zip = require('./zipCodeValidator')

let strings = ["Hello", "98052", "101"]

let validator = new zip()

strings.forEach(s => {
    console.log(`"${s}"-${validator.isAcceptable(s) ? "matches" : "does not match"}`)
})