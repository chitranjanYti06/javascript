const user ={
    username : "chitranjna",
    price :999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website`)
        console.log(this)
    }
}//current context ko refer karta hai

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "chitranjan"
//     console.log(this.username);
// }
// chai()



// const chai = function (){
//     let username = "chitranjan"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "chitranjan"
//     console.log(this)
// }
// chai()


// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4))


// const addTwo = (num1 , num2) => num1 + num2//implicit return
// const addTwo = (num1 , num2) => (num1 + num2)


const addTwo = (num1 , num2) =>( {username : "chitranjan"})
console.log(addTwo(3,4))



