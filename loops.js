// Loops in Python -> When we want to perform same task again and again at that place we use loops

// Types of Loops

// 1) For Loop
// 2) While loop
// 3) Do while loop
// 4) FOr in loop
// 5) For of Loop
// 6) ForEach loop

// For loop

/*
Syntax of For Loop
for(initialization; condition ; Updation){
    // Code to Execute
}

*/
for (var i = 0; i < 10; i+=2) {
    console.log(i)
}

/*
While Loop

initialization

while(condition){
    // Code to Execute

    // Update
}

*/

console.log("This is While Loop Code")

// x = 10
// while(true){
//     console.log(x);
//     x  = x+10;
//     if(x == 1000000){
//         break;
//     }
// }

// x = 1000
// while(x<100){
//     console.log(x);
//     x  = x+10;
// }

// Do - While Loops

// console.log("Hey I'm Do while Loops of Js");
// x = 1000
// do{
//     console.log(x);
//     x  = x+10;
// }while(x<100);


// Break and Continue Statement

// 1) Break

for(i = 2;i<100;i+=2){
    console.log(i)
    if(i%2 == 0 && i%3 ==0){
        break;
    }
}
// 2) Continue

console.log("Continue Statments in Js");
for(i = 0;i<=10;i+=1){
    if(i==3){
        continue;
    }
    console.log(i)
}