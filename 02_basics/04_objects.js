// const tinderUser1 = new Objects() //songleton objects
const tinderUser ={} //non singleton objects

tinderUser.id="123abnc"
tinderUser.name="chittu"
tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularUser ={
    email: "some@gamil.com",
    fullName:{
        userFullName:{
            firstName:"chitranjan",
            lastName:"kumar"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj3 ={5:"a", 6:"b"}

// const obj3={obj1,obj2}

// const obj4 = Object.assign({}, obj1,obj2,obj3)

const obj4={...obj1, ...obj2}

// console.log(obj4)



const users= [
    {
        id :1,
        email: "ckshf#@gamil.com"
    },
    {
        id :1,
        email: "ckshf#@gamil.com"
    },
    {
        id :1,
        email: "ckshf#@gamil.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))