// **Constructor Inheritance Exercise**

// **Exercise 4 - Animal & Dog**
// ✅ Create `Animal(name)` with method `speak()` ➞ `[name] makes a sound`
// ✅ Create `Dog(name)` that inherits `Animal`, adds method `bark()` ➞ `[name] barks`

// **Example Run:**
// `name = "Rocky"`
// `speak()` ➞ `Rocky makes a sound`
// `bark()` ➞ `Rocky barks`

// function Animal(name){
//     this.name = name;
//     this.speak = function(){
//         console.log(`${this.name} makes a sound`);
//     }
// }

// function Dog(name){
//     this.name = name;
//     this.bark = function(){
//         console.log(`${this.name} barks`);
//     }
// }

// const animal = new Animal("animal");
// const dog = new Dog("dog");
// Object.setPrototypeOf(dog, animal)
// dog.speak();
// dog.bark();


// **Exercise 5 - Vehicle & Car**
// ✅ Create `Vehicle(type)` with method `describe()` ➞ `This is a [type]`
// ✅ Create `Car(brand)` inherits `Vehicle`, adds method `info()` ➞ `This is a [brand] [type]`

// **Example Run:**
// `type = "car", brand = "BMW"`
// `describe()` ➞ `This is a car`
// `info()` ➞ `This is a BMW car`

function Vehicle(type){
    this.type;
    this.describe = function(){
        console.log(`This is a ${this.type}`);
    }
}




// **Exercise 6 - Shape Polymorphism**
// ✅ Create `Shape` with method `area()` returns `0`
// ✅ Create `Circle(radius)` override `area()` ➞ `Math.PI * r²`
// ✅ Create `Square(side)` override `area()` ➞ `side²`

// **Example Run:**
// `radius = 3`
// `area()` ➞ `28.27...`
// `side = 4`
// `area()` ➞ `16`

