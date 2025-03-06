var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
btn1.addEventListener("click",()=>{
    let body=document.body;
    body.style.background="none";
    // var h1=document.createElement("H1")
    body.style.backgroundColor= '#' + Math.random().toString(16).substring(2,8)
    // h1.innerHTML=`<h1 style="font-size: 100px; color: black;">${body.style.backgroundColor}</h1>`
    let h1 = document.querySelector("h1");
    if (!h1) {
        h1 = document.createElement("h1");
        document.body.appendChild(h1);
    }

    // Update h1 content and style
    h1.textContent = '#' + Math.random().toString(16).substring(2,8);
    h1.style.fontSize = "20px";
    h1.style.color = "black";
    h1.style.display= "flex";
    h1.style.justifyItems="center";
    h1.style.alignItems="center"
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