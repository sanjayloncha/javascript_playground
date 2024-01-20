let btn = document.getElementById("btn") ;
let userInput = document.getElementById("UserInput") ;
let pointer = document.getElementById("pointer") ;

btn.addEventListener("click",()=>{
    if(userInput.value > 0){
        let meterValue = Number(userInput.value) ;
        if(userInput.value>=191){
            pointer.style.marginLeft = `${72.8}%` 
        }else{
            meterValue = (meterValue/4) + 25 ;
            pointer.style.marginLeft = `${meterValue}%` 
        }
        // if(userInput.value<60){
        // }else if(userInput.value >=60 && userInput.value <120){
        //     meterValue = (meterValue/4) + 25 ;
        //     pointer.style.marginLeft = `${meterValue}%` 
        // }else{
        //     meterValue = (meterValue/4) + 25 ;
        //     pointer.style.marginLeft = `${meterValue}%` 
        // }
        console.log(meterValue) ;
    }else{
        alert("Please Enter value to check") ;
    }
})

