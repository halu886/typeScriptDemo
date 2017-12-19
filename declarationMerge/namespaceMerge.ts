/**
 * 合并命名空间
 */
namespace Animal {
    export class Zebra { }
    let haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}
namespace Animal {
    export function doAnimalsHaveMuscles() {
        // return haveMuscles
    }
    export interface Legged { numberOflegs: number }
    export class Dog { }
}

// let dog:Animal.