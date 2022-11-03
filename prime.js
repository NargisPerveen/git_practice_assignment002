function prime(num){
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;
}
if(factor==2){
retrun true;
}
retrun false;
}

let ans=prime(23);
if(ans==true){
console.log("prime number")'
}
else{
console.log("not prime number");
}