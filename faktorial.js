function faktorial(n) {
    if (n == 0){
        return (1);
    }else{
        return (n * faktorial(n - 1));
    }
}
console.log("7! = " + faktorial(7));
