function Person(nm,ag,gen){  //Constructure function for the multiple objects
    this.name=nm,
    this.age=ag,
    this.gender=gen,
    this.fun=function Displaying(){ 
        console.log("Hello,my name is",nm)
    }
    this.isAdult=function Checking(age){ //*** Bonus Task ***
        if(age >= 18){
            return true
        }
    }
}

var arr = [     // Array of the persons with there objects
    p1=new Person("Raheem",20,"Male"),
    p2=new Person("Naseer",15,"Male"),
    p3=new Person("Awais",19,"Male"),
    // p4=new Person("Kareem",18,"Male"),
    // p5=new Person("Saif",14,"Male")
]


console.log(arr)
p1.fun()
p2.fun()
p3.fun()


// *******Bonus Task*******

var  arr1=[]   // Declaring the array for storing only Adult names 
arr.forEach(
    function(value){
        a=value.isAdult(value.age)
        if (a){
            arr1.push(value.name)
        }
    }
)
console.log("Adults are : ",arr1)