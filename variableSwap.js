function SwapVariable(str1, str2){
    str1.push(str2);
    str2 = str1.shift()
    return str1+"", str2
}