// 1. Write a function called doubleValues which accepts
// an array of integers and returns a new array with all the
// values in the array passed to the function doubled.

function doubleValues(integers){
    const multyInregers = integers.map(integer => {
        return integer * 2;
    })
    return multyInregers;
}

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(array){
    const onlyEvenValue = array.filter(integer => {
        return integer % 2 === 0;
    })
    return onlyEvenValue;
}

// 3. Write a function called showFirstAndLast which accepts an
// array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

function showFirstAndLast(array){
    firstAndLastArray.push(array.shift());
    firstAndLastArray.push(array.pop());
    return firstAndLastArray;
}

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

function vowelCount(str){
    const vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    for (const char of str.toLowerCase()){
        if (vowels.hasOwnProperty(char)){
            vowels[char]++;
        }
    }
    return vowels;
}

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str){
    const lowerCase = str.tolowerCase();
    return lowerCase;
}

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

function shiftLetters(str){
    let shiftedStr="";
    for (const char of str){
        srt += String.fromCharCode(char.charCodeAt(0)-1)
    }
    return shiftedStr;
}

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise&#39;s function to
// keep it dry)
