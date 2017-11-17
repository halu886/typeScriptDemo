/**
 * @description 类型兼容性
 * @Date 2017/11/17
 * @author halu
 */

// //  类型兼容性
// interface Named {
//     name: string
// }

// class Person {
//     name: string
// }

// let p: Named;

// p = new Person()


// 开始
// interface Named {
//     name: string
// }
// let x: Named;
// let y = { name: 'Alice', location: 'Seattle' }

// x = y;

// function greet(y: Named) {
//     console.log("hello," + y.name);
// }

// greet(y)


// 比较两个函数
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;


// y = x;
// x = y

// let item = [1, 2, 3];
// item.forEach((value, index, array) => console.log(value));
// item.forEach((value) => console.log(value))


// let x = () => ({ name: 'Alice' })
// let y = () => ({ name: 'Alice', location: 'Seattle' })

// x = y;
// x = y;
// y = x;

// 函数参数双向斜变
enum EventType { Mouse, Keyboard }

interface EventTest { timestamp: number }
interface MouseEventTest extends EventTest { x: number, y: number }
interface KeyCode extends EventTest { KeyCode: number }

function listenEvent(eventType: EventType, handler: (n: EventTest) => void) {

}

listenEvent(EventType.Mouse, (e: MouseEventTest) => console.log(e.x + " " + e.y))

listenEvent(EventType.Mouse, (e: EventTest) => console.log((<MouseEventTest>e).x + (<MouseEventTest>e).y))

listenEvent(EventType.Mouse, <(e: EventType) => void>((e: MouseEventTest) => console.log(e.x + "," + e.y)))

listenEvent(EventType.Mouse, <(e: EventTest) => void>((e: MouseEventTest) => console.log(e.x + ',' + e.y)));