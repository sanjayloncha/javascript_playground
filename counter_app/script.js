let subBtn = document.getElementById("sub") ;
let addBtn = document.getElementById("add") ;
let countValue = document.getElementById("countValue") ;
let numberToShow = document.getElementById("num") ;

subBtn.disabled = true ;
let number = 0 ;
numberToShow.textContent = number ;

let handleChange = (op)=>{
    if(op == "sub"){
        number = number-1 ;
        if(number>0){
            subBtn.disabled = false ;
            addBtn.disabled = false ;
        }else{
            subBtn.disabled = true ;
        }
        numberToShow.textContent = number ;
    }else{
        number = number+1 ;
        if(number<5){
            subBtn.disabled = false ;
            addBtn.disabled = false ;
        }else{
            addBtn.disabled = true ;
        }
        numberToShow.textContent = number ;
    }
    
}

subBtn.addEventListener("click",function(){
    handleChange("sub") ;
}) ;
addBtn.addEventListener("click",function(){
    handleChange("add") ;
}) ;
