const input=document.querySelector("#input-btn")
const billAmount=document.querySelector("#input-amount")
const cashGiven=document.querySelector("#cash-input")
input.addEventListener("click",()=>{
    console.log("Amount",billAmount.value)
    console.log("Cash",cashGiven.value)
    if(billAmount.value>=0){
        console.log("hit Condition")
        if(billAmount.value>=cashGiven.value){
            console.log("hit true Condition")
        }else{
            console.log("enter cash amount is invalid")
        }

    }else{
        console.log("hitt invalid")
    }
})