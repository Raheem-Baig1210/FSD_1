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
            <img src=${user.picture.large} height="150" alt="User"/>
            <div>
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city},${user.location.country}</p>
            </div>
            `
            result.appendChild(li)
        })
    }catch(e){
        console.log(e)
    }
}
data()
function filterData(search){
    l1.forEach((value)=>{
        if(value.innerText.toLowerCase().include(search.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add("hide")
        }
    })
}