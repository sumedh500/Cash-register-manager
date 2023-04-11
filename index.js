const input=document.querySelector("#input-btn")
const billAmount=document.querySelector("#input-amount")
const cashGiven=document.querySelector("#cash-input")
input.addEventListener("click",()=>{
    console.log("Amount",billAmount.value)
    console.log("Cash",cashGiven.value)
    if(billAmount.value>=0){

        if(billAmount.value>=cashGiven.value){
            var billamount=billAmount.value
            var cashamount=cashGiven.value
             var total=billamount-cashamount
             console.log("total",total)
        }else{
            
        }

    }else{
        console.log("hitt invalid")
    }
})

function calculatefunction(amount){

}