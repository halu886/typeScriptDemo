interface Box {
    height: number;
    width: number;
    // scale: string;
}
interface Box {
    scale: number
}

let box: Box = { height: 1, width: 1, scale: 2 }

// class Animal { }
class Sheep { }
class Dog { }
class Cat { }

// interface Cloner {
//     clone(animal: Animal): Animal;
// }

interface Cloner {
    clone(animal: Sheep): Sheep
}

interface Cloner {
    // scale
    clone(animal: Dog): Dog
    clone(animal: Cat): Cat
}

interface DocumentTest {
    createElement(tagName: any): Element;
}
interface DocumentTest {
    createElement(tagName: 'span'): HTMLSpanElement
    createElement(tagName: 'div'): HTMLDivElement
}

interface DocumentTest {
    createElement(tagName: string): HTMLElement
    createElement(tagName: 'canvas'): HTMLCanvasElement
}
// var doc: DocumentTest
// doc.createElement()