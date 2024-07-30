//foulty calculator

let random = Math.random()
console.log(random)
let a = prompt("enter the first number")
let c = prompt("enter the operation")
let b = prompt("enter the second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if (random>0.1){
    //print correct calculation

    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //print foult calculation
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)


}