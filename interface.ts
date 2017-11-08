/**
 * @description typeScript(handbook)接口
 * @Date 2017/11/6
 * @author halu886
 */

// //  接口初探
// // function printLabel(labelledObj: { label: string }) {
// //     console.log(labelledObj.label);
// // }
// // let myObj = { size: 10, label: "Size 10 Object" };
// // printLabel(myObj);

// interface LabelleValue {
//     label: string
// }
// function printLabel(labelledObj: LabelleValue) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "size 10 Object" };

// printLabel(myObj)

// // 可选属性
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string, area: number } {
//     let newSquare = { color: 'white', area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//         // config.colr = 10;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: 'black' })
// console.log(mySquare)

// // 只读属性
// interface Point {
//     readonly x: number,
//     readonly y: number
// }
// let p1: Point = {
//     x: 10,
//     y: 20
// }

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12;
// // ro.push(5)
// // ro.length = 100;
// // a = ro;
// a = (<number[]>ro)
// a = ro as number[]

// // 额外的属性检查
// interface SquareConfig {
//     color?: string,
//     width?: number,
//     [propName: string]: any
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return config;
// }

// // let mySquare = createSquare({ colour: 'red', width: 100 });
// // let mySquare = createSquare({ width: 100 }) as SquareConfig
// // console.log(mySquare)

// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);
// console.log(mySquare)


// // 函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }

// mySearch = function (src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }

// // 可索引的类型
// interface StringArray {
//     [index: number]: string;
// }

// // let myArray: StringArray;

// // myArray = ["Bob", "Fred"];

// // let myStr: string = myArray[0]


// class Animal {
//     name: string
// }

// class Dog extends Animal {
//     bread: string
// }

// // interface NotOkey {
// //     [x: number]: Animal;
// //     [x: string]: Dog;
// // }
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     // name: string
// }

// interface ReadonlyStringArray {
//     readonly [index: number]: string
// }
// let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
// console.log(myArray[1], myArray[2])

// // 类类型
// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

// 类静态部分与实例部分的区别
// interface ClockConstructor {
//     new(hour: number, minute: number);
// }
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { };
//     // new()

// }

// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface
// }

// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log('beep beep');
//     }
// }

// // console.log('tests')
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log('tick tock')
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// // console.log(digital.tick(), analog.tick())
// digital.tick();
// analog.tick()


// 继承接口
// interface Shape {
//     color: string
// }

// interface Squara extends Shape {
//     sideLength: number
// }

// let squara = <Squara>{};
// // let test = new squara()
// squara.color = "blue";
// squara.sideLength = 10;

// interface Shape {
//     color: string
// }

// interface PenStroke {
//     penWidth: number
// }

// interface Squara extends Shape, PenStroke {
//     sideLength: number
// }

// let squara = <Shape>{};
// squara.color = "blue";
// // squara.sideLength = 100;
// squara.sideLength = 10;
// squara.penWidth = 5.0
// console.log(squara)