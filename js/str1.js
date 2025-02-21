var arr = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']  // Declaring and Initializing the array 

arr.push("Pineapple")   //Adding "Pineapple" at the end of the array 
console.log(arr)

arr.shift()   // Removing first element(Apple) from the array
console.log(arr)

arr.splice(1,0,"Strawberry")   // Adding "Strawberry" at the second position
console.log(arr)

console.log(arr.indexOf("Mango"))  //Finding the index of the "Mango"=2

arr.splice(3,1)   //Removing "Orange" from the array 
console.log(arr)

arr.sort()   // Sorting the array in an Alphabetical order
console.log(arr)

var arr1=[]    //Reversing the array and storing in the arr1
arr.forEach(
    function(value){
        arr1.unshift(value)
    }
)
console.log(arr1)