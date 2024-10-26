// Primitive
// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol meaning unique values

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

// Reference(Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

const obj = {
    name: "hitesh",
    age: 22
}

const myfun  = function(){
    console.log("Hello world");
}

console.log(typeof(myfun))