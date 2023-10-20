var con =document.querySelector(".container")
var lov=document.querySelector("i")
var heart=document.querySelector(".ri-heart-fill")

var a=1
con.addEventListener("dblclick",function(){
    lov.style.transform="translate(-50%,-50%) scale(1)"
    heart.style.color="red"
    lov.style.opacity="0.8"
    a=0
    setTimeout(function() {
        lov.style.opacity="0"
    }, 2000);
    setTimeout(function(){
        lov.style.transform="translate(-50%,-50%) scale(0)"
    },2000);
})
heart.addEventListener("click",function(){
    if( a==1){
       heart.style.color="red"
       a=0
    }
    else{
        heart.style.color="white"
        a=1
    }
})