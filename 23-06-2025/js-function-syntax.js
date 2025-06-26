let add = (num1, num2)=>{
    return num1 + num2;
}

let subtract = (num1, num2)=>{
    return num1 - num2;
}

let multiply = (num1, num2)=>{
    return num1 * num2;
}

let division = (num1, num2)=>{
    return num1 / num2;
}

console.log(add(5, 40));
console.log(subtract(5, 40));
console.log(multiply(5, 40));
console.log(division(500, 40));

let multip = (num)=>{
    return num1 * 2;
}

let sub = (num)=>{
    return num1 - num2;
}

function numberProcessor(num, multi){
    multi(num)
}

function test(){
    var x = 5;
    if(true){
        var x = 10;
    }
    console.log(x);
}
test();


function printValue(param){
    console.log(param);
}

function myForEach(arr, fn){
   for (let i = 0; i < arr.length; i++){
       fn(arr[i]);
   }
}

myForEach(arr, printValue);