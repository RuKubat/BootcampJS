

/* function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}  */

function findFactorial(num) {
    let result = 1; 
    for(let i = 1; i <= num; i++) {
        result *= i;
        // console.log(i, '____',result)
    }
    return result
}
console.log(findFactorial(6));
console.log(findFactorial(5));



