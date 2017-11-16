/**
 * @description 泛型
 * @author halu
 * @Date 2017/11/16
 */

//  泛型指hello world
// function identity(arg: number): number {
//     return arg;
// }

// function identity(arg: any): any {
//     return arg
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let outPutting = identity<string>('asdfadsf')


// 使用泛型变量
// function identity<T>(arg: Array<T>): T[] {
//     console.log(arg.length);
//     return arg;
// }

// // 泛型类型
// function identity<T>(arg: T): T {
//     return arg;
// }

// let test: { <T>(arg: T): T } = identity;


// interface Generic<T> {
//     (arg: T): T;
// }

// // function identity<T>(arg: T): T {
// //     return arg;
// // }

// let myIdentity: Generic<number> = identity;


// // 泛型类
// class GenericNumber<T>{
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) { return x + y }


// let stringNumberic = new GenericNumber<string>();
// stringNumberic.zeroValue = '';
// stringNumberic.add = function (x, y) { return x + y }
// console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'))


// // 泛型约束
// function loggingIdentity<T extends lengthwise>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

// interface lengthwise {
//     length: number
// }

// loggingIdentity({ length: 'asdf' })

// // 在泛型约束中使用类型参数
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 }

// getProperty(x, 'a')
// getProperty(x, 'm')


// 泛型里使用类类型
function create<T>(c: { new(): T; }): T {
    return new c();
}


class BeeKeeper {
    hashMask: boolean;
}

class ZooKeeper {
    nameTag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Loin extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c()
}

createInstance(Loin).keeper.nameTag
createInstance(Bee).keeper.hashMask
