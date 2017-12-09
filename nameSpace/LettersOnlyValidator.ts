/// <reference path="./Validation.ts"/>
namespace Validation {
    const letterRegexp = /^[a-zA-Z]+&/
    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return letterRegexp.test(s)
        }
    }
}