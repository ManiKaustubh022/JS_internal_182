// function fun(n){
//     return n*2
// }
// let ch=fun(72)
// console.log(ch)

// let arr=[1,2,3,4,5,"Mani","Kaustubh",ch]
// console.log(arr)

// let fruits=["apple","banana","grapes","orange","dragonfruit"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// fruits.push("papaya")
// fruits.pop()
// fruits.unshift("Kiwi")
// fruits.shift()
// console.log(fruits.includes("mango"))
// console.log(fruits.indexOf("banana"))

//higher order array function
// let number =[1,2,3]
// let double=number.map(n=>n*2)
// console.log(double)

// let nums=[10,25,30,40]
// let results=nums.filter(n=>n>1)
// console.log(results)

//------------------------------------------------------------------------------------------

// syntax of reduce  --> array.reduce((accumulator,currentValue=>{...},initailValue))
// TERMINOLOGY
// Term --> Meaning
// accumulator(acc) --> stores ther result as loop continue
// current value --> currnet element of array bieng processed
// initial value --> starting value for accumulator

//------------------------------------------------------------------------------------------

let numbers =[2,4,6,8]
let doubles=numbers.map(n=>n*2)
console.log(doubles)

let nums=[10,25,5,60]
let results=nums.filter(n=>n>1)
console.log(results)

let total=numbers.reduce((acc,cu)=>acc+cu,0)
console.log(total)

//------------------------------------------------------------------------------------------

// Convert Object --> JSON String
// let jsonString=JSON.stringify(student)

// Convert JSON String--> Object
// let obj=JSON.parse(jsonString)

//------------------------------------------------------------------------------------------

