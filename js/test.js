// var m1={
//     model:"ip16"
//     ,
//     brand:"sapple"
//     ,
//     size:"big"
//     ,
//     price:100000
// }

// var ob1={
//     arr:['1','2','3','4']
//     ,
//     contact:{
//         phno:123456789
//         ,
//         primary:True
//     }
// }

class murie{
    constructor(a,b,c){
        this.model=a
        this.size=b
        if( 1>2) {
            this.size="XL"
            this.price="2000"
        }
        // this.price=c
        this.call= function (){
            if( 1<2) {
                this.size="XL"
                this.price="2000"
            }
            console.log("calling")
        }
    }
}

var m2=new murie("new","big",123)
console.log(m2)
m2.call()


class pop extends murie{
    constructor(a,b,c){
        super(a,b,c)
    }
}

var mech=new pop('old','small',321)
console.log(mech)
