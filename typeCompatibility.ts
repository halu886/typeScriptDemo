/**
 * @description 类型兼容性
 * @Date 2017/11/17
 * @author halu
 */

// //  类型兼容性
// interface Named {
//     name: string
// }

// class Person {
//     name: string
// }

// let p: Named;

// p = new Person()


// 开始
// interface Named {
//     name: string
// }
// let x: Named;
// let y = { name: 'Alice', location: 'Seattle' }

// x = y;

// function greet(y: Named) {
//     console.log("hello," + y.name);
// }

// greet(y)


// 比较两个函数
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;


// y = x;
// x = y

// let item = [1, 2, 3];
// item.forEach((value, index, array) => console.log(value));
// item.forEach((value) => console.log(value))


// let x = () => ({ name: 'Alice' })
// let y = () => ({ name: 'Alice', location: 'Seattle' })

// x = y;
// x = y;
// y = x;

// // 函数参数双向斜变
// enum EventType { Mouse, Keyboard }

// interface EventTest { timestamp: number }
// interface MouseEventTest extends EventTest { x: number, y: number }
// interface KeyCode extends EventTest { KeyCode: number }

// function listenEvent(eventType: EventType, handler: (n: EventTest) => void) {

// }

// listenEvent(EventType.Mouse, (e: MouseEventTest) => console.log(e.x + " " + e.y))

// listenEvent(EventType.Mouse, (e: EventTest) => console.log((<MouseEventTest>e).x + (<MouseEventTest>e).y))

// listenEvent(EventType.Mouse, <(e: EventTest) => void>((e: MouseEventTest) => console.log(e.x + "," + e.y)))

// listenEvent(EventType.Mouse, <(e: EventTest) => void>((e: MouseEventTest) => console.log(e.x + ',' + e.y)));

// listenEvent(EventType.Mouse, (e: number) => console.log(e))

// // 可选参数和剩余参数
// function invokeLater(args: any[], callback: (...args: any[]) => void) {

// }

// invokeLater([1, 2], (x, y) => console.log(x + ',' + y))

// invokeLater([1, 2], (x?, y?) => console.log(x + ',' + y));


// // 枚举
// enum Status { Ready, Waiting }

// enum Color { Red, Blue, Green }

// let statusTest = Status.Ready
// statusTest = 2;
// // statusTest = Color.Red

// // 类
// class Animal {
//     feet: number;
//     constructor(name: number, numFeet: number) {
//     }
// }

// class Size {
//     feet: number;
//     constructor(numFeet: number) { }
// }

// let a: Animal;
// let s: Size;

// a = s;
// s = a;

// // 泛型
// interface Empty<T> {
//     data: T
// }

// let x: Empty<number>
// let y: Empty<string>

// // x = y;

// let identity = function <T>(x: T): T { return x }

// let reverse = function <U>(y: U): U { return y }

// identity = reverse


// 高级主题
// // 交叉类型
// function extendTest<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = first[id]
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result
// }

// class Person {
//     constructor(public name: string) { }
// }

// interface Loggable {
//     log(this: Person): void
// }

// class ConsoleLogger implements Loggable {
//     log(this: Person) {
//         console.log(this.name)
//     }
// }
// var jim = extendTest(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log()


// 联合类型
// function padLeft(value: string, paddding: string | number) {
//     if (typeof paddding === 'number') {
//         return Array(paddding + 1).join(" ") + value;
//     }
//     if (typeof paddding === "string") {
//         return paddding + value;
//     }
//     throw new Error(`Expected string or number,got ${paddding}`);
// }

// console.log(padLeft("Hello World", true))

interface Bird {
    fly();
    layEgg();
}

interface Fish {
    swim();
    layEgg();
}

function getSmallPet(): Fish | Bird {
    var smallPet = {
        fly() { },
        layEgg() { }
    }
    return smallPet;
}

let pet = getSmallPet();
pet.layEgg()

// if(pet.swim)
if ((<Fish>pet).swim) {
    (<Fish>pet).swim()
} else {
    (<Bird>pet).fly()
}


// 用户自定义的类型保护
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly()
}

// typeof类型保护
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

// function padLeft(value: string, paddding: string | number) {
//     if (isNumber(paddding)) {
//         return Array(paddding + 1).join(' ') + value;
//     }
//     if (isString(paddding)) {
//         return paddding + value
//     }
//     throw new Error(`Expected string or number,got ${paddding}`)
// }

// isFish(new )
// padLeft('test', 34)

function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    // padding
    throw new Error(`Expected string or number,got '${padding}'.`)
}



