const input = document.querySelector("#input-btn")
const billAmount = document.querySelector("#input-amount")
const cashGiven = document.querySelector("#cash-input")
const noOfNotes = document.querySelectorAll(".no-of-notes");

const change = [2000, 500, 100, 10]
input.addEventListener("click", () => {
    console.log("Amount", billAmount.value)
    console.log("Cash", cashGiven.value)
    if (billAmount.value >= 0) {

        if (billAmount.value >= cashGiven.value) {
            var billamount = billAmount.value
            var cashamount = cashGiven.value
            var total = billamount - cashamount
            console.log("total", total)
            calculatefunction(total)
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
})

function calculatefunction(amount) {

    for (let i = 0; i < change.length; i++) {
        const numberOfNotes = Math.trunc(amount / change[i]);
        amount = amount % change[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}