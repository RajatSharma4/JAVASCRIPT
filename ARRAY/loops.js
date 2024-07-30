let arr = [1,3,77,35,4]
let newarr = []
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)
// }

// arr.forEach((values, index, arr) => {
//     console.log(values, index, arr)
    
// });

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const element = obj[key];
//             console.log(key,element)
            
//         }
//     }

// for (const iterator of arr) {
//     console.log(iterator)
    
// }
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
    
    
}
console.log(newarr)


