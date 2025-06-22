function reverseArray(arr){
    let reverseArr = [];
    for (let i of arr){
        reverseArr.unshift(i);
    }
    return reverseArr;
}

console.log(reverseArray([1,2,3,4,5,6]))