// Exercise 1 - Phone
// ✅ Create a Phone constructor with brand and model. Add method details() that prints:
// Phone: [brand] [model]
// Example Run:
// brand = Samsung, model = S22
// details() ➞ Phone: Samsung S22

function Phone(brand, model){
   this.brand = brand;
   this.model = model;
   this.details = function(){
       console.log(`Phone: ${brand} ${model}`);
   }
}

const samsung = new Phone("Samsung", "S22")
samsung.details();


// Exercise 2 - Rectangle
// ✅ Create a Rectangle constructor with width and height. Add method area() that returns
// area (width * height).
// Example Run:
// width = 5, height = 4
// area() ➞ 20

function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width * height;
    }
}

const rectangle = new Rectangle(5, 4)
console.log(rectangle.area());


// Exercise 3 - BankAccount
// ✅ Create BankAccount with owner and balance. Add methods:
// ● deposit(amount) adds to balance
// ● withdraw(amount) subtracts if enough funds
// ● checkBalance() prints current balance

// Example Run:
// balance = 1000
// deposit(500) ➞ balance = 1500
// withdraw(200) ➞ balance = 1300
// checkBalance() ➞ Balance: 1300

// function BankAccount(owner, balance){
//     this.owner = owner;
//     this.balance = balance;
// }

BankAccount.prototype.deposit = function(sumToAdd){
    this.balance += sumToAdd;
    console.log(`balance = ${this.balance}`);
}

BankAccount.prototype.withdraw = function(sumToSub){
    this.balance -= this.balance - sumToSub >= 0 ? sumToSub : 0;
    console.log(`balance = ${this.balance}`);
}

BankAccount.prototype.checkBalance = function(){
    console.log(`Balance = ${this.balance}`);
}

const hershysAccount = new BankAccount("hershy", 1000);
hershysAccount.checkBalance();
hershysAccount.deposit(150);
hershysAccount.withdraw(300);
hershysAccount.withdraw(850);

