var c=100
if(true){
    let a=10//local
    const b=20//local
    var c=30//global
}
//console.log(a)//error because it is local and within the scope so u can't access it outside
//console.log(b)//error because it is local and within the scope so u can't access it outside
console.log(c)//it prints this because it is global the only disadvantage is here we declared var c=100 but later on in if we declared var c=30 but we need o/p as 100 but we will get as 30 so we use let frequently instead of var
//javascript executes everything line by line if we got 1 error in one line it will stop execution and shows the error it doesn't executes the other lines
//++++++function declaring ways++++//
one(5)
function one(num){
    return num+1//here u can call the function before its declaration ie one(5) doesn't shows any error
}
two(6)//throws an error
const two=function(num){
    return num+2//but here if u call the function before its declaration it shows the error it sis called hoisting
}//these are the two ways for declaring a function

