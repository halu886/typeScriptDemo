/**
 * @description typeScript(handbook)变量声明
 * @date 2017/11/6
 * @author halu886
 */
// 块作用域
// function f(input: boolean) {
//     // let a = 100;
//     if (input) {
//         let b = a + 1;
//         return b;
//     }
//     // return b
//     try {
//         throw `oh no!`;
//     } catch (e) {
//         console.log(`oh well.`);
//     }
//     // console.log(e)
//     // a++;
//     let a;
// }
// function foo() {
//     return a;
// }
// console.log(foo())
// let a;
// // 重定义及屏蔽
// // function f(x) {
// //     var x;
// //     var x;
// //     if (true) {
// //         var x;
// //     }
// //     let x = 10;
// //     let x = 10;
// // }
// // function f(x) {
// //     let x = 100;
// // }
// // function g() {
// //     let x = 100;
// //     var x = 100;    
// // }
// // function f(condition, x) {
// //     if (condition) {
// //         let x = 100;
// //         return x;
// //     }
// //     return x;
// // }
// // console.log(f(false, 0))
// // console.log(f(true, 0))
// function sumMatrix(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i]
//         }
//     }
//     return sum;
// }
// console.log(sumMatrix([[1, 2, 3], [1, 2, 3]]))
// // 块级作用域变量的获取
// function theCityThatAlwaysSleep() {
//     let getCity;
//     if (true) {
//         let city = 'Seattle'
//         getCity = function () {
//             return city;
//         }
//     }
//     return getCity()
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i); }, 100 * i)
// }
// // const变量
// const numLivesForCat = 9;
// const kitty = {
//     name: 'Aurora',
//     numLives: numLivesForCat,
// }
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat,
// }
// kitty.name = 'Rory';
// kitty.name = 'kitty';
// kitty.name = 'cat';
// kitty.numLives--;
// let VS const
// // 解构
// let input: [number, number] = [1, 2];
// // let [first, second] = input;
// // console.log(first);
// // console.log(second);
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f(input);
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);
// 对象解构
// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// }
// let { a, b } = o;
// ({ a, b } = { a: 'baz', b: 101 })
// console.log(a);
// console.log(b)
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length
// console.log(passthrough);
// console.log(total)
// // 属性重命名
// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// }
// let { a: newNumber, c: newName2 } = o;
// let { a, b }: { a: string, b: number } = o;
// console.log(a, b)
// // 默认值
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject
//     console.log(a);
//     console.log(b)
// }
// keepWholeObject({ a: '111' });
// // 函数声明
// type C = { a: string, b?: number }
// // function f({ a, b }: C): void {
// // }
// function f({ a, b }: C = { a: ' ' }): void {
//     console.log(a, b)
// }
// f({ a: 'yes' })
// f();
// // f({})z
// 展开
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);
let defaults = { food: 'spicy', price: '$$', ambiance: "noisy" };
let search = Object.assign({ food: 'rich' }, defaults);
console.log(search);
// class C {
//     p = 12;
//     m() {
//     }
// }
// let c = new C();
// let clone = { ...c };
// clone.p
// // clone.m();
// c.m()
//# sourceMappingURL=varDeclaration.js.map