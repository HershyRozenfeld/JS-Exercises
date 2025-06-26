// // OOP

// // factories = function that returns function
// function f1(){
// return ()=>{}
// }


// const f2 = f1()
// const f3 = f1()
// const f4 = f1()

// // create object? 
// // person(name, age) => {name:name, age:age}

// function createObj(name, age){
// return {
// a:name,
// b:age
// }
// }

// // const p1 = createObj("yishai",36)

// // OOP -> class -> instance

// // function constructors

// function Person(name,age){
// this.name = name; // p1.name = name
// this.age = age; // p1.age = age
// this.sayHi = function(){
// console.log(`hi`);
// }

// }
// // => p1 = {name:yishai,age:35}

// const p1 = new Person("yair",35)

// /*
// 1. create new object - {}
// 2. all "this" in the function = new object
// 3. run the function
// 4. 
// */


// // function constuctor book - author, gener, numOfPages, showDetails

// function Car(brand) {
//    this.brand = brand;
//    this.drive = function(){
//     console.log(`drive ${brand}`);
//    }
//    this.fuel = function(){
//     console.log(`fuel ${brand}`);
//    }
// }

// function Tesla(){
//     this.isBettry = true;
//     this.fuel = function(){
//         console.log('bzzzz bzzz');
//     }
// }

// const t = new Tesla();
// const skoda = new Car("skoda");
// Object.setPrototypeOf(t, skoda);

// t.drive();
// t.fuel();
 
