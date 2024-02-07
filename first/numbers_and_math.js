//explicit declaration
const num=new Number(200)
console.log(num.toString().length)//here if u do the same thing in console u will get as {number and some functions to it like toString()...}
console.log(num.toFixed(2))//u will get in float value as 200.00
const s=34.394483
console.log(s.toPrecision(2))//u will get as precised one ie as 34.4(means only 3 digits since it is 3)
const p=1000000
console.log(p.toLocaleString())//u will get as american value like 1,000,000 for indian type 'en-IN' in ()
//math
console.log(Math)
console.log(Math.random())//generates a arandom number between 0 and 1
console.log(Math.floor(Math.random()) * 10+1)//gives numbers above 1
//Math.floor is for rounding off to smallest one if(n=11.98 then it give o/p as 11)
//math.ceil is for rounding off to largest one if n==11.4 then it gives as 12
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)//generates a numbers b/w 10 and 20