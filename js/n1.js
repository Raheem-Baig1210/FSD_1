const arr=["a","b","c","a","b","c","d"]
const callbckfun=(acc,val)=>{
    if (acc[val]){
        acc[val]+=1
    } else{
        acc[val]=1
    }
    return acc
}
const count=arr.reduce(callbckfun,{})
console.log(count)