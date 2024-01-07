//singleton

//object literals

// object.create() singleton isi me hota hai


const mySym =Symbol("key1")

const JsUser = {
    name : "chitranjan",
    age: 15,
    "full name": "kumar",
    [mySym]:"mykey1",
    locaton: "varanasi",
    email: "chitranjank862@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" ," tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "skjfkg@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "micro@chatgpt.com"
console.log(JsUser)


JsUser.greetings = function(){
    console.log("Hello js user");

    
}

JsUser.greetingsTwo = function(){
    console.log(`hello js user ,${this.name}`);

    
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())