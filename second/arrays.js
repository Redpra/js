const arr=[1,2,3,"kfof"]
console.log(arr)
const arr1=new Array(2,3,4,5)
//arrays are similar to lists in python as this also accept different types of elements
console.log(arr1)
//operations
arr1.push(3)//similar to list in python ie append method
console.log(arr1)
arr1.pop()
console.log(arr1)
console.log(arr1.includes(8))//checks whether the given element ie 8 present in the array or not
console.log(arr1.indexOf(3))
console.log(arr1.indexOf(7))//returns -1 since element is not present
const newarr=arr1.join()//makes a new array of arr1 elements as a string type
console.log(newarr)
console.log(arr1.slice(1,3))//doesn't include 3 but prints elements at index 1,2
console.log(arr1)
console.log(arr1.splice(1,3))//includes 3 with 1 and 2 but the main difference is it removes the elments which are in index 1,2,3 from original arr1
console.log(arr1)//execute once
