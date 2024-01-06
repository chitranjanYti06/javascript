//kis tarah se ham data ko memory me rakhate hain aur kaise access karte hai us aadhar par do tarah ke data type hote hain
//primive and non primitive

//primitive
//7types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 12
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let UserEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const biGnumber = 155656522223232332236665n


//non-primitive reference type
//Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj={
    name: "chitranjan",
    age: 14,

}

const myFun= function(){
    console.log("Hello WOrld")

}

console.log(typeof heros)
//jitne bhi non primitive datatype hain unta type object hi aata hai
    
