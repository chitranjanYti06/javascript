// Immeediately Invoked Function Expressions )(IIFE)

(function chai(){
    console.log('db connected');
}) ();
//inmidiate execute karne ke liye use hota hai global scope ke pollutioin se kai bar problem hoti hai to jo bhi global scope ke variable
// aur jo bhi pollution hai usko hatane ke liye hamne iife ka use kiya

( (name) => {
    console.log(`Db connect ${name}`);
})('chitranjan')
