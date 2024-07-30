//for loop

// let a = 1;
// for(let i = 0; i<50; i++){
//     console.log(a+i);
// }

//for in loop

let obj = {
    name: "Rajat",
    role: "engineer",
    company: "microsoft"
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(key, element);
        
    }

    //for off loop

    // for (const c of "harry") {
    //     console.log(c)
        
    // }

    //while loop

    // let a = 0;
    // while(a<6){
    //     console.log(a);
    //     a++;
    // } 

    //do while loop
    let b = 10;
    do{
        console.log(b);
        b++;
    }
    while(b<6);


