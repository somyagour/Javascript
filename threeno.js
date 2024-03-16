// 1.find the largest no. among three no.
a=2
b=2
c=2
if(a>b && a>c)
{
console.log("a is the largest No");
}
else if(b>a && b>c)
{
console.log("b is the largest No");
}
else if(c>a && c>b){
console.log("c is the largest No");
}
else if(a==b && b==c && c==a){
    console.log("all are equal");
}
else{
    console.log("invalid");
}

// 2.check if the triangle is isoscles(2 sides are equal),
// equilateral(3 sides are aqual),
// scales triangle(3sides are not equal).
// a=12;
// b=11;
// c=23;
// if (a==b && b==c){
//     console.log("triangle is equilateral");
// }
// else if (a==b || b==c || a==c){
//     console.log("triangle is isosceles");
// }
// else {
//     console.log("triangle is scalene");
// }
// 3.find the no. is present in range or not.
// var start=-1;
// var end=-100;
// var num =-55;
// if(start>=num && end<=num){
//     console.log("in range");
// }
// else{
//     console.log("not in range");
// }
// 4.check the year is leap year or not.
// var year= 20;
// if(year%4==0 && year!==0){
// console.log("it is a leap year");
// }
// else{
//     console.log("it is not a leap year");
// }