const input=document.querySelector("#input-btn")
const billAmount=document.querySelector("#input-amount")
const cashGiven=document.querySelector("#cash-input")
input.addEventListener("click",()=>{
    console.log("Amount",billAmount.value)
    console.log("Cash",cashGiven.value)

})