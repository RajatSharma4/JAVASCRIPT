// checking the divisibility
function checkDivisibility(num){
    if(num%2 == 0 && num%3 == 0){
        console.log(`${num} is divisible by 2 and 3.`)
    }
    else{
        console.log(`${num} is not divisible by 2 and 3.`)
    }
}

//example usage
const number = 80; // You can change this number to test with different values
checkDivisibility(number);