function functionname(){
    console.log("heya")
}
functionname()//here function name ie functionname is a reference and when js encounters () it executes it
function mine(username){
    return "heya"+username//here u can use backticks too ie `hi hello ${username}`
}
const myfun=mine("praneeth")
console.log(myfun)
function num(num1,num2){
    console.log(num1+num2)
}
num(3,"a")//here there will be a problem it prints 3a instead of error so we need to write if conditions to check its datatype
function login(username){//here username is parameter to overcome we can use the down one
    return `${username} logged in`
}
const f=login("user")//if instead of user u pass an empty one as argument it gives u an undefined as an answer. and here user is argument
console.log(f)
function login1(usename){
    if(!usename){//here it checks if username is not empty ie not undefined if it is then only it goes inside the if 
        console.log("enter username")
        return
    }
    return "heya"+usename
}
const j=login1("praneeth")
console.log(j)

//if you wanna pass more than infinite parameters at a time u can use REST operator(ie ...(3 dots))
function hii(val1,val2,...num){
   console.log(num)
}
hii(10,20,30,40,50,60)//o/p is 30,40,50,60 because 10,20 moves to val1,val2 respectively and remaining numbers moves into an array called num

//functions with objects
//here u can pass object as an argument
const jk={//here an object is declared
    name:"jk",
    age:24
}
function k(l){//a function for any object is created ie. l
    console.log(l.name,l.age)
}
k(jk)//function k is called on jk object
//similarly u can do it for arrays to
const p=[10,20,30]
function r(arr){
    console.log(arr[0])
}
r(p) //return or prints 1st value of an array

