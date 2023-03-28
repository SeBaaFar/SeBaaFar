var clickMenu=document.getElementById("desplegar");
var clickMenu1=document.getElementById("contraer")
clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="0px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegar").style.visibility="hidden"
    document.getElementById("contraer").style.visibility="visible"
});

clickMenu1.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-60px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="hidden";
    document.getElementById("desplegar").style.visibility="visible";
})