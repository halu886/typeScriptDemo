// for……of语句
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry);
}
for (let i in someArray) {
    console.log(i)
}

let numbers = [1, 2, 3]
for (let num of numbers) {
    console.log(num)
}