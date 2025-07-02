// commonJS
// const res = require("./file1");
// console.log(res.name);

export const firstName = 'Hershy';

export const lastName = 'Rosenfeld';

export default function printPerson(){
    console.log(`${firstName} ${lastName}`);
}