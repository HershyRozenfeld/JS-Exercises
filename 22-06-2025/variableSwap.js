function SwapVariable(a, b){
    a = "some string";
    b = "other string";
    [a, b] = [b, a];
    return(a,'\n',b);
}
