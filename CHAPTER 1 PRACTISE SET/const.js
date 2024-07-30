const myObject={
    name:"Rajat",
    age: 20
};

//you can modify the properties of the object 
myObject.country = "USA";
myObject.age=32;  //addint new key of existing program
console.log(myObject);

//but you cannot reassign the object to hold a different value
//myObject = 10; //Error Assignment to constant variable...