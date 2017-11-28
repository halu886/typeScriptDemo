// /**
//  * @description 类型兼容性
//  * @Date 2017/11/17
//  * @author halu
//  */

// // //  类型兼容性
// // interface Named {
// //     name: string
// // }

// // class Person {
// //     name: string
// // }

// // let p: Named;

// // p = new Person()


// // 开始
// // interface Named {
// //     name: string
// // }
// // let x: Named;
// // let y = { name: 'Alice', location: 'Seattle' }

// // x = y;

// // function greet(y: Named) {
// //     console.log("hello," + y.name);
// // }

// // greet(y)


// // 比较两个函数
// // let x = (a: number) => 0;
// // let y = (b: number, s: string) => 0;


// // y = x;
// // x = y

// // let item = [1, 2, 3];
// // item.forEach((value, index, array) => console.log(value));
// // item.forEach((value) => console.log(value))


// // let x = () => ({ name: 'Alice' })
// // let y = () => ({ name: 'Alice', location: 'Seattle' })

// // x = y;
// // x = y;
// // y = x;

// // // 函数参数双向斜变
// // enum EventType { Mouse, Keyboard }

// // interface EventTest { timestamp: number }
// // interface MouseEventTest extends EventTest { x: number, y: number }
// // interface KeyCode extends EventTest { KeyCode: number }

// // function listenEvent(eventType: EventType, handler: (n: EventTest) => void) {

// // }

// // listenEvent(EventType.Mouse, (e: MouseEventTest) => console.log(e.x + " " + e.y))

// // listenEvent(EventType.Mouse, (e: EventTest) => console.log((<MouseEventTest>e).x + (<MouseEventTest>e).y))

// // listenEvent(EventType.Mouse, <(e: EventTest) => void>((e: MouseEventTest) => console.log(e.x + "," + e.y)))

// // listenEvent(EventType.Mouse, <(e: EventTest) => void>((e: MouseEventTest) => console.log(e.x + ',' + e.y)));

// // listenEvent(EventType.Mouse, (e: number) => console.log(e))

// // // 可选参数和剩余参数
// // function invokeLater(args: any[], callback: (...args: any[]) => void) {

// // }

// // invokeLater([1, 2], (x, y) => console.log(x + ',' + y))

// // invokeLater([1, 2], (x?, y?) => console.log(x + ',' + y));


// // // 枚举
// // enum Status { Ready, Waiting }

// // enum Color { Red, Blue, Green }

// // let statusTest = Status.Ready
// // statusTest = 2;
// // // statusTest = Color.Red

// // // 类
// // class Animal {
// //     feet: number;
// //     constructor(name: number, numFeet: number) {
// //     }
// // }

// // class Size {
// //     feet: number;
// //     constructor(numFeet: number) { }
// // }

// // let a: Animal;
// // let s: Size;

// // a = s;
// // s = a;

// // // 泛型
// // interface Empty<T> {
// //     data: T
// // }

// // let x: Empty<number>
// // let y: Empty<string>

// // // x = y;

// // let identity = function <T>(x: T): T { return x }

// // let reverse = function <U>(y: U): U { return y }

// // identity = reverse


// // 高级主题
// // // 交叉类型
// // function extendTest<T, U>(first: T, second: U): T & U {
// //     let result = <T & U>{};
// //     for (let id in first) {
// //         (<any>result)[id] = first[id]
// //     }
// //     for (let id in second) {
// //         if (!result.hasOwnProperty(id)) {
// //             (<any>result)[id] = (<any>second)[id];
// //         }
// //     }
// //     return result
// // }

// // class Person {
// //     constructor(public name: string) { }
// // }

// // interface Loggable {
// //     log(this: Person): void
// // }

// // class ConsoleLogger implements Loggable {
// //     log(this: Person) {
// //         console.log(this.name)
// //     }
// // }
// // var jim = extendTest(new Person("Jim"), new ConsoleLogger());
// // var n = jim.name;
// // jim.log()


// // 联合类型
// // function padLeft(value: string, paddding: string | number) {
// //     if (typeof paddding === 'number') {
// //         return Array(paddding + 1).join(" ") + value;
// //     }
// //     if (typeof paddding === "string") {
// //         return paddding + value;
// //     }
// //     throw new Error(`Expected string or number,got ${paddding}`);
// // }

// // console.log(padLeft("Hello World", true))

// // interface Bird {
// //     fly();
// //     layEgg();
// // }

// // interface Fish {
// //     swim();
// //     layEgg();
// // }

// // function getSmallPet(): Fish | Bird {
// //     var smallPet = {
// //         fly() { },
// //         layEgg() { }
// //     }
// //     return smallPet;
// // }

// // let pet = getSmallPet();
// // pet.layEgg()

// // // if(pet.swim)
// // if ((<Fish>pet).swim) {
// //     (<Fish>pet).swim()
// // } else {
// //     (<Bird>pet).fly()
// // }


// // // 用户自定义的类型保护
// // function isFish(pet: Fish | Bird): pet is Fish {
// //     return (<Fish>pet).swim !== undefined;
// // }
// // if (isFish(pet)) {
// //     pet.swim();
// // } else {
// //     pet.fly()
// // }

// // // typeof类型保护
// // function isNumber(x: any): x is number {
// //     return typeof x === 'number';
// // }

// // function isString(x: any): x is string {
// //     return typeof x === 'string';
// // }

// // function padLeft(value: string, paddding: string | number) {
// //     if (isNumber(paddding)) {
// //         return Array(paddding + 1).join(' ') + value;
// //     }
// //     if (isString(paddding)) {
// //         return paddding + value
// //     }
// //     throw new Error(`Expected string or number,got ${paddding}`)
// // }

// // isFish(new )
// // padLeft('test', 34)

// // function padLeft(value: string, padding: string | number) {
// //     if (typeof padding === 'number') {
// //         return Array(padding + 1).join(" ") + value;
// //     }
// //     if (typeof padding === 'string') {
// //         return padding + value;
// //     }
// //     // padding
// //     throw new Error(`Expected string or number,got '${padding}'.`)
// // }



// // interface Padder {
// //     getPaddingString(): string
// // }

// // class SpaceRepeatingPadder implements Padder {
// //     constructor(private numSpaces: number) { }
// //     getPaddingString() {
// //         return Array(this.numSpaces + 1).join("")
// //     }
// // }

// // class StringPadder implements Padder {
// //     constructor(private value: string) { }
// //     getPaddingString() {
// //         return this.value;
// //     }
// // }

// // function getRandomPadder() {
// //     return Math.random() < 0.5 ?
// //         new SpaceRepeatingPadder(4) :
// //         new StringPadder(" ")
// // }

// // let padder: Padder = getRandomPadder();

// // if (padder instanceof SpaceRepeatingPadder) {
// //     padder;
// // }

// // if (padder instanceof StringPadder) {
// //     padder
// // }

// // // 可以为null的类型
// // let s = "foo";
// // s = null;
// // let sn: string | null = "bar";
// // sn = null;
// // sn = undefined;

// // // 可选参数和可选参数
// // function f(x: number, y?: number) {
// //     return x + (y || 0);
// // }
// // console.log(f(1, 2), f(1), f(1, undefined))

// // class C {
// //     a: number;
// //     b?: number;
// // }

// // let c = new C();
// // c.a = 12;
// // // c.a = undefined;
// // c.b = 13;
// // c.b = undefined;
// // c.b = null;


// // 类型保护和类型断言
// // function f(sn: string | null): string {
// //     if (sn == null) {
// //         return "defalt"
// //     } else {
// //         return sn;
// //     }
// // }

// // function broken(name: string | null): string {
// //     function postfix(epither: string) {
// //         return name.charAt(0) + '. the ' + epither;
// //     }
// //     name = name || 'Bob';
// //     return postfix("great")
// // }

// // function fixed(name: string | null): string {
// //     function postfix(epither: string) {
// //         return name!.charAt(0) + '. the ' + epither;
// //     }
// //     name = name || "Bob";
// //     return postfix("greate")
// // }


// // console.log(fixed(null));

// // type Name = string;
// // type nameResolver = () => string;
// // type NameOrResolver = Name | nameResolver;
// // function getName(n: NameOrResolver): Name {
// //     if (typeof n === 'string') {
// //         return n;
// //     } else {
// //         return n();
// //     }
// // }

// // type Container<T> = { value: T }

// // type Tree<T> = {
// //     value: T;
// //     left: Tree<T>;
// //     right: Tree<T>;
// // }

// // type LinkedList<T> = T & { next: LinkedList<T> }
// // // type Tree<T> = {
// // //     value: T;
// // // }
// // interface Person {
// //     name: string
// // }

// // // var people: LinkedList<Person>;
// // // var s = people.name;
// // // s = people.next.next.next.name

// // // type Yikes = Array<Yikes>

// // // 接口VS类型别名
// // type Alias = { num: number };
// // interface Interface {
// //     num: number
// // }
// // declare function aliased(arg: Alias): Alias;
// // declare function interfaced(arg: Interface): Interface

// // type Easing = "ease-in" | "ease-out" | "ease-in-out";
// // class UIElement {
// //     aimate(dx: number, dy: number, easing: Easing) {
// //         if (easing === "ease-in") {
// //             console.log(easing)
// //         } else if (easing === "ease-out") {
// //             console.log(easing)
// //         } else {
// //             console.log(easing)
// //         }
// //     }
// // }
// // // (new UIElement()).aimate(1, 2, 'unease')?
// // function createElement(tagName: 'img'): HTMLElement;
// // function createElement(tagName: 'input'): HTMLElement;
// // function createElement(tagName: string): Element { return new Element() }

// // function rollDie(): 1 | 2 | 3 | 4 | 5 {
// //     return 1;
// // }

// // function foo(x: number) {
// //     if (x != 1 || x != 2) { }
// // }


// // interface Square {
// //     kind: "square";
// //     size: "number"
// // }

// // interface Rectangle {
// //     kind: "rectangle";
// //     width: number;
// //     height: number;
// // }
// // interface Circle {
// //     kind: "circle",
// //     radius: number
// // }

// // type Shape = Square | Rectangle | Circle;

// // function area(s: Shape) {
// //     switch (s.kind) {
// //         case "square": return s.size * s.size;
// //         case "rectangle": return s.height * s.height
// //         case "circle": return Math.PI * s.radius ** 2;
// //     }
// // }
// // interface Square {
// //     kind: "square";
// //     size: "number"
// // }

// // interface Rectangle {
// //     kind: "rectangle";
// //     width: number;
// //     height: number;
// // }
// // interface Circle {
// //     kind: "circle",
// //     radius: number
// // }
// // interface Triangle {
// //     kind: 'triangle'
// // }
// // type Shape = Square | Rectangle | Circle | Triangle;

// // function assertNever(x: never): never {
// //     throw new Error("Unexpected object:" + x);
// // }

// // function area(s: Shape) {
// //     switch (s.kind) {
// //         case "square": return s.size * s.size;
// //         case "rectangle": return s.height * s.height
// //         case "circle": return Math.PI * s.radius ** 2;
// //         case "triangle": return 1;  
// //         default: return assertNever(s)
// //     }
// // }

// // interface Type {
// //     typeName: string
// // }
// // let b: any = {
// //     a: 1
// // }

// // // let a: Type = b;
// // type A = keyof Type;
// // // let c: A =''
// // let d = 'a';
// // console.log()

// // class a {
// //     a,
// //     b,
// //     c
// // }

// // for (let x in a)
// //     console.log(x)


// // class BasicCalculator {
// //     public constructor(protected value: number = 0) { }
// //     public currentValue(): number {
// //         return this.value;
// //     };
// //     public add(operand: number): this {
// //         this.value += operand;
// //         return this;
// //     }
// //     public multiply(operand: number): this {
// //         this.value *= operand;
// //         return this;
// //     }
// // }

// // class ScientificCalculator extends BasicCalculator {
// //     public constructor(value = 0) {
// //         super(value)
// //     }
// //     public sin() {
// //         this.value = Math.sin(this.value);
// //         return this;
// //     }
// // }

// // let v = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();

// // 索引类型
// // function pluck(o, name) {
// //     return name.map(n => o[n])
// // }

// // function pluck<T, k extends keyof T>(o: T, name: k[]): T[k][] {
// //     return name.map(n => o[n])
// // }
// // interface Person {
// //     name: string;
// //     age: number
// // }

// // let person: Person = {
// //     name: "Jarid",
// //     age: 35
// // }

// // let strings: string[] = pluck(person, ['name']);
// // console.log(strings)


// // interface Map<T> {
// //     [key: string]: T;
// // }

// // let keys: keyof Map<number>;
// // // let a: number = 123;
// // let value: Map<number>['asdf'];


// // 映射类型
// interface Person {
//     name: string;
//     age: number;
// }


// type PartialPersonType = {[P in keyof Person]?: Person[P]};


// type ReadonlyType<T> = {
//     readonly [P in keyof T]: T[P];
// }

// type PartialType<T> = {
//     [P in keyof T]?: T[P];
// }

// type PersonPartial = PartialType<Person>;

// type ReadonlyPerson = ReadonlyType<Person>;

// type keys = 'option1' | 'option2';
// type Flags = {[K in keys]: boolean}

// type NullablePerson = {[P in keyof Person]: Person[P] | null}

// type Prox<T> = {
//     get(): T;
//     set(value: T): void;
// }
// type Proxify<T> = {
//     [P in keyof T]: Prox<T[P]>;
// }

// function proxify<T>(o: T): Proxify<T> {
//     // return o
// }
// let prop = { a: 1, b: 2 }
// let proxyProps = proxify(prop);
// // proxyProps.a.get

// // type PickTest<T, K extends keyof T> = {
// //     [P in K]: T[P]
// // }

// // type RecordTest<K extends string, T> = {
// //     [P in K]: T;
// // }

// // type ThreeStringProps = RecordTest<'prop1' | 'prop2' | 'prop3', string>


// // 对映射进行推断
// function unproxify<T>(t: Proxify<T>): T {
//     let result = {} as T;
//     for (const k in t) {
//         result[k] = t[k].get();
//     }
//     return result;
// }

// let originalProps = unproxify(proxyProps);
