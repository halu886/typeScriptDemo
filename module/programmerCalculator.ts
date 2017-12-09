import { Calculator } from "./Calculator";
class ProgrammerCalculator extends Calculator {
    static digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    constructor(public base: number) {
        super();
        if (base <= 0 || base > ProgrammerCalculator.digits.length) {
            throw new Error("base has to be within 0 to 16 inclusive")
        }
    }

    protected processDigit(digits: string, currentValue: number) {
        if (ProgrammerCalculator.digits.indexOf(digits) >= 0) {
            return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digits);
        }
    }
}

export { ProgrammerCalculator as Calculator }

export { test } from "./Calculator"
