//
const myObjects = {
    js : 'javaScript',
    cpp : 'c++',
    rb :"ruby",
    swift: "swift by apple"
}

for (const key in myObjects) {
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const progrmming = ["js" , "rb" ,"py" ,"java", "cpp"]
for (const key in progrmming) {
   console.log(progrmming[key]);
}

const map = new Map()
map.set('In' , "India")
map.set('USA' ,"United States of America")
map.set('Fr', "France")
map.set('In' , "India")

for (const key in map) {
   console.log(key);
}