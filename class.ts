/**
 * @description typeScript(handbook)类
 * @Date 2017/11/10
 * @author halu886
 */

//  类
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "hello," + this.greeting;
//     }
// }

// let greeter = new Greeter('world');
// console.log(greeter.greet())

// // 继承
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`)
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log('Slithering……');
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name) }
//     move(distanceInMeters = 45) {
//         console.log("Galloping……");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move()
// tom.move()


// 共有，私有与受保护的修饰符
// // 默认为public
// class Animal {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public move(distanceInMeters: number) { console.log(`${this.name} moved ${distanceInMeters}m.`) }
// }

// // 理解private
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }

// new Animal("Cat").name;
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName }
}

class Rhino extends Animal {
    constructor() { super("Rhino") }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName }
}