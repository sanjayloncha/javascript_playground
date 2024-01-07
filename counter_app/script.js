let subBtn = document.getElementById("sub") ;
let addBtn = document.getElementById("add") ;
let countValue = document.getElementById("countValue") ;
let numberToShow = document.getElementById("num") ;

subBtn.disabled = true ;
let number = 0 ;
numberToShow.textContent = number ;

let handleChange = (num)=>{
    number += num ;
    if(number>0){
        subBtn.disabled = false ;
    }else{
        subBtn.disabled = true ;
    }
    if(number<5){
        addBtn.disabled = false ;
    }else{
        addBtn.disabled = true ;
    }
    numberToShow.textContent = number ;
}

subBtn.addEventListener("click",function(){
    handleChange(-1) ;
}) ;
addBtn.addEventListener("click",function(){
    handleChange(1) ;
}) ;