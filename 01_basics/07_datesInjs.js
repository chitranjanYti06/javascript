//dates

let myDate= new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate = new Date(2024, 0 , 23)
console.log(myCreateDate.toDateString())

let myCreateDate2 = new Date(2024, 0 , 23, 5, 3)
console.log(myCreateDate2.toLocaleString())


let myCreateDate3 = new Date("2024-01-15")
console.log(myCreateDate3.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''

})