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