

function sayMYname() {

    console.log("c");
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("t");
    console.log("u");
    
    
}
// sayMYname();
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
// const result= addTwoNumbers(3, 5)
// console.log("Result: ", result)

function addTwoNumbers(number1, number2){
    // let result =number1+number2
    // return result;
 return number1+number2

}
const result= addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(userName = "sam"){
    if(!userName){
               console.log("Please enter username")
               return
    }
    return ` ${userName} just loggedIn`
}


// console.log(loginUserMessage("chitranjan"))
console.log(loginUserMessage())



function calculateCarPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCarPrice(200, 400 , 500))


const user ={
    username : "chitranjan",
    price :199
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and peice is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myNewArray =[ 200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

