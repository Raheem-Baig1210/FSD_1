const result=document.getElementById("result")
const filter=document.getElementById("filter")
const l1=[]

const data =async ()=>{
    try{
        const res=await fetch("https://randomuser.me/api?results=50")
        const {result}=await res.json()
        result.innerHTML=""
        result.foreach((user)=>{
            const li=document.createElement("li")
            l1.push(li)
            li.innerHTML=`
            <img src
            `
        })
    }catch(e){
        console.log(e)
    }
}