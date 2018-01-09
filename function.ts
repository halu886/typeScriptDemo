/**
 * @description 函数
 * @author halu
 * @Date 2017/11/16
 */

// //  函数

// // named function
// function add(x, y) {
//     return x + y;
// }

// let z = 100;

// let myAdd = function (x, y) {
//     return x + y + z;
// }

// // 函数类型
// function add(x: number, y: number): number {
//     return x + y;
// }

// let myAdd = function (x: number, y: number): number { return x + y }

// 书写完整函数类型
// let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// }

// // 推断类型
// let myAdd: (baseValue: number, increment: number) => number =
//     function (x, y) { return x + y }

// // 可选参数和默认参数
// function buildName(firstName = "Will", lastName: string) {
//     return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.")
// let result3 = buildName("Bob", "Adams");
// let result4 = buildName(undefined, "Adams")
// console.log(result1, result2, result3, result4)

// // 剩余参数
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join("  ")
// }

// console.log(buildName("Joseph", "samuel", "Lucas", "Mackinizie"))

// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

// // this和箭头函数
// interface Card {
//     suit: string;
//     card: number;
// }

// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }

// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function (this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             // console.log(this.suits[pickedSuit])
//             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit)

// // 回调函数里的this参数
// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void
// }

// class Handler {
//     info: string;
//     onClickBad = (e: Event) => {
//         this.info = e.message;
//     }
// }

// let h = new Handler();
// let uiElement: UIElement;
// uiElement.addClickListener(h.onClickBad)

// 重载
let suit = ["hearts", "spades", "clubs", "diamonds"];


function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suit[pickedSuit], card: x % 13 };
    }

}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card:" + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// pickCard('asdfasdf')

import 'reflect-metadata'
// Reflect.getMetadata()
// Reflect.metadata(...)
// @classDecorator
const formatMetadataKey = Symbol("format");
const requireMetadataKey = Symbol("required");
class Greeter {
    // @format("Hello,%s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }

    // @enumerable(false)
    @validate
    greet( @required name: string) {
        return "Hello," + name + "," + this.greeting;
    }
}

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requireMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requireMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, description: TypedPropertyDescriptor<Function>) {
    let method = description.value;
    description.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requireMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] == undefined) {
                    throw new Error("Missing required argument");
                }
            }
        }
        return (<Function>method).apply(this, arguments);
    }
}

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);

}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
}

let a = new Greeter('test');
console.log(a.greet('test'));
