"use strict";

let num = prompt ("Введите число");
let flag = true;
function isPrime (){
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        flag = false;
        break;
    }
}
}
console.log(flag);



