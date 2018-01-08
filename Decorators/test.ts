// import "reflect-metadata"
import 'reflect-metadata'
const formatMetadataKey = Symbol("format");
function sealed(constructor: Function) {
    // console.log(target)
    // debugger
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// @sealed
@classDecorator
class Greeter {
    @format("Hello,%s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }

    @enumerable(false)
    greet() {
        return "Hello," + this.greeting;
    }
}


function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);

}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetaData(formatMetadataKey, target, propertyKey)
}
// let greeter = new Greeter('test')
// console.log('test')
// new ('asdf'); 

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

// console.log(new Greeter("world"));


class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }

}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    }
}

let a = new Point(1, 2);

console.log(a.x, a.y);