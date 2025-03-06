const int=document.getElementById("in");
const add=document.getElementById("add");
const dis=document.getElementById("display");
const out=document.getElementById("output");
var arr=[]

add.addEventListener('click',()=>{
    var val=int.value
    if(val==""){
        alert("Please insert some thing")
    }else{
    arr.push(val)
    int.value='';
    int.focus()
    }
})
dis.addEventListener("click",()=>{
    out.innerHTML='';
    arr.forEach((item, index) => {
        let element = document.createElement("p");
        element.innerText = `Element ${index} = ${item}`;
        out.appendChild(element);
    });
}
)
