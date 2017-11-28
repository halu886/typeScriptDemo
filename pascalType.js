// // boolean
// let isDone: boolean = false
// // 数字
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// //字符串
// let nameTest: string = 'bob';
// nameTest = "smith"
// console.log(nameTest)
// nameTest = `Gena`;
// let age: number = 37;
// let sentence: string = `Hello,my name is ${nameTest}
// I'll be ${ age + 1} years old next month.`;
// console.log(sentence)
// // 数组
// let list: number[] = [1, 2, 3];
// let list: Array[number] = [1, 2, 3]
// // 元组Tuple
// let x: [string, number];
// x = ['hello', 10];
// // x = [10, 'hello'];
// console.log(x[0].substr(1));
// // console.log(x[1].substr(1))
// x[3] = 'world';
// // console.log(x[5].toString());
// enum Color { Red = 'test', Green, Blue }
// let c: string = Color['test'];
// console.log(c)
// // 任意值
// let notSure: any = 4;
// notSure = "maybe a string instead"
// notSure = false;
// notSure.ifitExists();
// notSure.toFixed();
// let prettySure: Object = 4;
// // prettySure.toFixed()
// let list: any[] = [1, true, 'free'];
// list[1] = 100;
// console.log(list)
// // 空值
// function warnUser(): void {
//     console.log("this is test")
// }
// // let unusable: void = null
// let u: undefined = undefined;
// let n: null = null
// // never
// function error(message: string): never {
//     throw new Error(message);
// }
// function fail() {
//     return error("Something failed");
// }
// function infiniteLoop(): never {
//     while (true) { }
// }
// // 类型断言
// let someValue: any = "this is a string"
// let strLength: number = (<string>someValue).length;
// // let someValue:
// strLength = (someValue as string).length
// var 声明
// var a = 10;
// function f() {
//     var message = 'Hello,world';
//     return message;
// }
// function f() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }
// function f() {
//     var a = 1;
//     a = 2;
//     var b = g();
//     a = 3;
//     return b;
//     function g() {
//         return a
//     }
// }
// // var g = f();
// console.log(f());
// // 作用域规则
// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }
//     return x;
// }
// // console.log(f(true));
// // console.log(f(false));
// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i]
//         }
//     }
//     return sum;
// }
// console.log(sumMatrix([[1, 3, 4, 5,], [2, 3, 45, 5, 6, 7, 87, 8, 4]]))
// // 变量获取怪异之处
// // for (var i = 0; i < 10; i++) {
// //     setTimeout(function () { console.log(i); }, 100 * i)
// // }
// for (var i = 0; i < 10; i++) {
//     (function () {
//         setTimeout(function () { console.log(i) }, 100 * i)
//     })()
// }
// // let声明
// let hello = "Hello!";
// function f(input: boolean) {
//     let a = 100;
//     if (input) {
//         let b = a + 1;
//         return b;
//     }
//     // return b;
// }
// try {
//     throw "oh no";
// } catch (e) {
//     console.log('oh well.');
// }
// // console.log(e)
// // a++;
// // let a;
// // a++
// function foo() {
//     return a;
// }
// console.log(foo())
// let a;
// 重定义及屏蔽
// function f() {
//     var x;
//     var x;
//     if (true) {
//         var x;
//     }
// }
// let x = 10;
// let x = 20;
// function f(x) {
//     let x = 100;
// }
// function g() {
//     let x = 100;
//     var x = 100;
// }
// function f(condition, x) {
//     if (condition) {
//         let x = 100;
//         return x;
//     }
//     return x;
// }
// function sumMatrix(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }
// console.log(sumMatrix([[1, 2, 3], [1, 2, 3]]))
// 块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
//# sourceMappingURL=pascalType.js.map