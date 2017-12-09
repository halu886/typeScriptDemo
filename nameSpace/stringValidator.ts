namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean
    }

    const letterRegexp = /^[a-zA-Z]+&/
    const numberRegexp = /^[0-9]+&/

    // export class LetterOnlyValidator implements StringValidator {
    //     isAcceptable(s: string) {
    //         return letterRegexp.test(s)
    //     }
    // }

    // export class ZipCodeValidator implements StringValidator {
    //     isAcceptable(s: string) {
    //         return s.length === 5 && numberRegexp.test(s);
    //     }
    // }
}






