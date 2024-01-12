const accountId = 144553
let accountEmail = "chitranjank862@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"


//accountId = 2 not allowed we cant change the value of const variable
accountEmail = "vsjkkj@gmail.com"
accountPassword = "25522"
accountCity = "Delhi"

let accountState;
//if we are not assigning any value in the variable so it will be undefined

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])


{

    //scope
    //
    /*
    prefer not to use var
    because of issue in block scope and functional scope
     */
}

// war have a issue because it has function scope 
// example if we have a variable and another variable with the same name isnide the function if we 
//are making any chnage in the variable so it will effect the another variable