function person(nm,ag,gen){
    this.name=nm,
    this.age=ag,
    this.gender=gen,
    this.fun=function(){
        console.log("Hello,my name is",nm)
    }
}
var arr = [
    p1=new person("Raheem",20,"Male"),
    p2=new person("Naseer",20,"Male"),
    p3=new person("Awais",20,"Male")
]
console.log(arr)
p1.fun()
p2.fun()
p3.fun()