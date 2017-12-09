/// <reference path="./Validation.ts"/>
/// <reference path="./LettersOnlyValidator.ts" />
/// <reference path="./ZipCodeValidation.ts"/>
let strings = ['Hello', '98052', "010"];

let validators: { [s: string]: Validation.StringValidator; } = {}
validators["ZIP code"] = new Validation.ZipCodeValidator()
// validators[1] = 1;
validators["Letters only"] = new Validation.LetterOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`)
    }
}