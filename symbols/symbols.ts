let sym1 = Symbol();

let sym2 = Symbol("key");

// let syn = ;
// let syn: symbol = Symbol(1)
let sym3 = Symbol('key');
console.log(sym2 === sym3)

let sym = Symbol();
let obj = {
    [sym]: "value"
}
console.log(obj[sym])

// Symbol.hasInstance(obj)
// var a1 = Symbol.for('sym')
// console.log(Symbol.keyFor(a1))
// var s2 = Symbol('sym')
// console.log(Symbol.keyFor(s2))
// const getClassNameSymbol = Symbol();
// class C {
//     [getClassNameSymbol]() {
//         return "C"
//     }
// }

// let c = new C();
// let className = c[getClassNameSymbol]();
// console.log(className)
