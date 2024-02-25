const user={
    name:"praneeth",
    age:19,
    intro:function(){
        console.log(`hi this is ${this.name}`)
        console.log(this)//it gives about the current context
    }
    
}
user.intro()
user.name="sanji"//since here the name got changed to snaji from praneeth the o/p will be for sanji
user.intro()
//if u use console.log(this) in browser since its global object is windows soit gives about it but here if u use it it gives u an empty object
console.log(this) //o/p:{}
function hii(user){
    console.log(this.user)//o/p: undefined because in some functions it is not used but if u use console.log(this) u will egt somethings see them
}
hii("praneeth")
//arrow function
const hi=()=>{
 console.log("hiii")
}
hi()