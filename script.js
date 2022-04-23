'use strict'

//sum of two number
let a=20;
let b=40;
console.log(a+b);

//simple interest
let p=100;
let r=6;
let t=2;
let SI=(p*r*t)/100;
console.log(SI);


//kinetic energy
let m=10;
let v=20;
let energy=0.5*m*v*v;
console.log(energy);

//fahrenheit to celsius
let fahrenheit=56;
let celsius=(fahrenheit-32)*(9/5);
console.log(celsius);

//calculate area,perimeter,volume
let a1=5;
let area=(a1*a1);
console.log(area);
let perimeter=(4*a1);
console.log(perimeter);
let surface_area=(6*a1*a1);
console.log(surface_area);
let volume=(a1*a1*a1);
console.log(volume);



//profit or loss
const cp=window. prompt("enter costing price: ");
const sp=window. prompt("enter selling price: ");
function profit(cp,sp)
{
    let profit=(sp-cp);
    return(profit);
}
function loss(cp,sp)
{
    let loss=(cp-sp);
    return(loss);
}
if(sp===cp)
{
    console.log("no profit no loss");
}
else if(sp>cp)
{
    alert("profit"+ profit(cp,sp));
}
else{
    alert("loss"+loss(cp,sp));
}



//sum of natural number
const natural_number=(prompt("enter a positive integer: "));
let sum=0;
for(let i=1;i<=natural_number;i++)
{
    sum+=i;
}
console.log('sum of natural numbers is:'+ sum);



//odd number in descending order
let n=4;
for(let i=n-1; i>=0; i--)
{
    let a=1+i*2;
    console.log(a);
}

//sum of digit that in string
let n2=1234;
let sum=0;
while(n2)
{
    sum+=n2%10;
    n2=Math.floor(n2/10);
}
console.log(sum);


//reverse a number
let n3=12345;
let rev=0;
let rem;
while(n3>0)
{
    rem=n3%10;
    rev=rev*10+rem;
    n3=Math.floor(n3/10);

}
console.log(rev);




