//object declarartion two types 
//1.singleton (using object.create) ie created when we use a constructor. creates only a single object
//2.literal(using object literals) ie when we create objects by literals then it won't be a single one
const js={
    name:"praneeth",
    age:19,
    coll:"viit",
}//here by default name,age,coll are string in object
console.log(js.name)//but not used frequently
//console.log(js[name])//throws an error since its a string so use this
console.log(js["name"])
//for changing values
js.age="20"
//if you don't want to change anything then freeze that object
//Object.freeze(js)
js.name="reddy"
console.log(js)
js.greeting=function(){
    console.log("hey")
}
console.log(js.greeting())

//singleton
//const jd1=new Object()
const jd1={
    name:{
        fullname:{
            firstname:"praneeth"
        }
    }
}
console.log(jd1.name.fullname.firstname)
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
//const obj3={obj1,obj2}//o/p:{{1:'a',2:'b'},{3:'a',4:'b'}}
const obj3=Object.assign(obj1,obj2)
console.log(obj3)
//console.log(obj1) here if you do this it also prints the same as obj 3 because obj1 is in the place of target so instead that use a{}(ie empty curly braces so that that obj3 thing will be in {} and obj 1 don't change)
const obj4=Object.assign({},obj1,obj2)//likethis
const obj5={...obj1,...obj2}
console.log(obj5)

const course={
    name:"js",
    fee:"free"
}
console.log(course.fee)//intead of typing this course.fee,course.fee always we can do destructuring
const {fee}=course
console.log(fee)//this is same as previous course.fee so now you can only write just fee or u can give it aan another name too by writting like this const {fee:f}=course now if you write consolelog f you will get fee

//json structure:similar to object but it do not have any name,when ever there is an api fetch u get this data in this form
{
    name: "json";
    company: 10
}
//json can also be available in arrays
[
    {},
    {},
    {}
]