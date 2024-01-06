// conversion and operation

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN 

//"33"=>33
//"33ABC"=>NaN but type is number

//true => 1; false => 0

let isLoggedin = 10

let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn);

//1 => true; 0=>false
//"" =>false
//"chitranjan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//********************operations****************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);

// console.log(2-2);
// console.log(2*2);
// console.log(2**3);

// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " chitranjan"
let str3 = str1+str2
console.log(str3)


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1+ 2+ "2");

console.log((3+4) *5 %3)

console.log(+true);
console.log(+"");


let num1, num2 ,num3

num1= num2= num3= 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter)//prefix and postfix

//link
