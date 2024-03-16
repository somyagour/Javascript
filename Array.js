// Array -> Collection of Values in a single Variable

let ramu = [1, 2, 3, 4, 54, 5, "Lokesh", "Somya", "Roshni"]

console.log(ramu)

// Get the value of element by index
console.log(ramu[5])
 

// Printing all the element by loop
// for(let i = 0;i<ramu.length;i++){
//     console.log(ramu[i])
// }

// Short way
// for (let element of ramu) {
//     console.log(element)
// }

// Change the value of arr by index
// ramu[7] = "two"
// console.log(ramu)

// Methods of Array

// ramu.push("Somya")
// ramu.push("Roshni")
// ramu.push("Somya")
// console.log(ramu)


// Remove last Element
// ramu.pop()
// ramu.pop()
// console.log(ramu)

// Insert at first
// ramu.unshift("One")
// ramu.unshift("Second")
// console.log(ramu)


// Remove from first
// ramu.shift()
// console.log(ramu)

// Include
console.log(ramu.includes("two"))

// FindIndex
// console.log(ramu.findIndex("One"))


// Fill method
// ramu.fill("Ramu")
// console.log(ramu)


// Get value at index
console.log(ramu[3]);

console.log(ramu.at(3))

const Kanya = ["Kanya1", "Kanya2"];
const Chore = ["Ladka1", "Ladka2", "Ladka3"];
const myChildren = Chore.concat(Kanya);
console.log(myChildren)

// delete myChildren
// console.log(myChildren,"Nhi Rahe Bacche sab aap ki kripa hai 🥹🥹😜😜🤪")


// slice
console.log(myChildren.slice(1,4))



// THis is New COde of Js

arr = ["check","Hello","check"]
for (data of arr){
    console.log(data);
}

