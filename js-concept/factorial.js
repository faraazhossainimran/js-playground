function factorial(number){
    let result = 1;
    for(let i =number; i >= 1; i--) {
        result = result * i;
        console.log(i, result)
    }
    return result;
}
const number = 4;
const result = factorial(number)
console.log("factorial of 9: ", number , result)