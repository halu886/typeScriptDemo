import { StringValidator } from "./Validation";

const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    name: string;
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}