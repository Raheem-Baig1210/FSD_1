const add =() => 1+1
console.log(add())

const dynamicAdd=(...list)=>{
    let ans=0;
    for(let i=0;i<list.length;i++){
        ans =ans +list[i];
    }
    return ans;
}
l1=[1,2,3]
console.log(dynamicAdd(1,2,3,4,5,6,7,8))

let a={
    name:"Faseeh"
}
let b={
    course: "FSD"
}
let c={
    ...a, ...b,
    dum:"Biryani"
}
console.log(c)