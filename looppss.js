// 1.print the table of a given number.
// console.log("table of 2:-");
// var a=2;
// for (var i=1; i<=10; i++){
// console.log(i*a);
// }
// 2.check a no. is prime or not.
var num=56;
var count=0;
for (i=0; i<=num;i++){
    if(num%i==0){
        count++;
    }
}
    if(count==2){
        console.log("it is a Prime Number");
     } else{
            console.log("it is not prime no.");
        }
            
// 3.print all the prime no. b/w 1 to 100.
// var a;
// var count=0;
// for (i=0;i<=100;i++){
//     if(a%1==0){
//         count++;
//     }
//     if(count==2){
//                  console.log("it is a even");
//               } else{
//                    console.log(a);
//                 }
// }
// 4.print all the odd no. sum b/w 1 to 50.
// var sum=0;
// for(i=1;i<=50;i++){
//     if(i%2!==0){
//         console.log(i); 
//         sum+=i;    
//     }
 
// }