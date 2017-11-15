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

// // new Animal("Cat").name;
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino") }
// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName }
// }

// let animal = new Animal("goat")
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// // animal = employee;
// // rhino.name


// // 理解protected
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name }
// }

// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello,my name is ${this.name} and I work in ${this.department}`
//     }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name);

// class Person {
//     protected name: string;
//     protected constructor(theName: string) {
//         this.name = theName;
//     }
// }

// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello,my name is ${this.name} and I work in ${this.department}`
//     }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person('John');


// // readonly修饰符
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";


// // 参数属性
// class Animal {
//     constructor(private name: string) {

//     }
//     move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`)
//     }
// }

// let animal = new Animal('cat');
// // console.log()
// animal.move(223132)


// // 存取器
// class Employee {
//     fullName: string;
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// let passcode = `secret passcode`;

// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error:Unauthorized update of employee!")
//         }
//     }
// }


// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName)
// }

// // 静态属性
// class Grid {
//     static origin = { x: 0, y: 0 };
//     calculateDistanceFromOrigin(point: { x: number, y: number }) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
//     }
//     constructor(public scale: number) { }
// }

// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }), grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }))


// 抽象类
// abstract class Animal {
//     abstract makeSound(): void;
//     move(): void {
//         console.log("roming the earch……")
//     }
// }

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log("Department name " + this.name);
    }

    abstract printMeeting(): void;
}

class AccountDepartment extends Department {
    constructor() {
        super('Accounting and Auditing')
    }
    generateReports(): void {
        console.log('Generating accounting reports……')
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am')
    }
}

let department: Department;
// department = new Department();
department = new AccountDepartment();
department.printName();
department.printMeeting();
// department.generateReports()