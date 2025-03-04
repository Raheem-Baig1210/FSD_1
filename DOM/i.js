var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
btn1.addEventListener("click",()=>{
    let body=document.body;
    body.style.background="none";
    body.style.backgroundColor= '#' + Math.random().toString(16).substring(2,8)
})
btn2.addEventListener("click",()=>{
    let body=document.body;
    body.style.background="none";
    body.style.background=getRandomGradient();
})
function getRandomGradient(){
    const color1='#'+Math.random().toString(16).substring(2,8)
    const color2='#'+Math.random().toString(16).substring(2,8)
    return `radial-gradient(circle,${color1},${color2})`
}