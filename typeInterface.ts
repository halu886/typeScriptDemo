/**
 * @description 类型推论
 * @author halu
 * @Data 11/17
 */

// 最佳通用类型
let x = [0, 1, null];

// function
// let zoo = [Rhino(), Elephant(), Snake()];

class Animal {

}

class Rhino extends Animal {

}

class Elephant extends Animal {

}

class Snake extends Animal {

}

// 上下文类型
// window.onmousedown = function (mouseEvent) {
//     console.log(mouseEvent.button);
// }

function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()]
}