let num = 17,count = 0;

for(let i = 1;i<=num;i++){
    if(num%i == 0){
        count = count+1;
    }
}

if(count == 2){
    console.log("This is Prime Number");
}
else{
    console.log("This is Not Prime Number");

}