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
function login(username){//here username is parameterto overcome we can use the down one
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


//functions with objects
