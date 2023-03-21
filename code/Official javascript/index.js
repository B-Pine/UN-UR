
let a = 3
let b = 4;
let c = 5;
let d = 6;

console.log(sum(587, 7435,24872, a, b, c));

function sum (...numbers) {
    let total = 0;
    for (let nbr of numbers) {
        total += nbr;
    }
    return total;
}