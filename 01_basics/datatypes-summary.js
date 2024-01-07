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





//+++++++++++++++++++++++++++++++++++++++++




//Stack(primitive), Heap(Non-primitive)
//jab bhi ham stack ke under memory allocate hoti hai to hame uski variable ki hamko copy milti hai copy milti hai
// jab bhi heap ke under memory allocate karte hain to usko reference milta hai to jab bhi change karenge to original value me change hota hai


let myYoutubeName ="chitranjankumat"

let anotherName = myYoutubeName
anotherName = "chaipeCharcha"

console.log(anotherName);
console.log(myYoutubeName)

let user1={
    email: "user@google.com",
    
    upi : "5666@ybl"
}

let user2=user1
user2.email = "chitranjan@google.com"
console.log(user1.email)
console.log(user2.email)
    
