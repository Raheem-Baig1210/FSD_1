var arr = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']
arr.push("Pineapple")
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(1,0,"Strawberry")
console.log(arr)
console.log(arr.indexOf("Mango"))

arr.splice(3,1)
console.log(arr)
arr.sort()
console.log(arr)
var arr1=[]
arr.forEach(
    function(value){
        arr1.unshift(value)
    }
)
console.log(arr1)