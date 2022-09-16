const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const numberOfNotes = document.querySelectorAll(".number-of-notes")

checkBtn.addEventListener("click", function validateBill() {
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value) {
           const amountToBeReturn = cashGiven.value-billAmount.value;
           calculateChange(amountToBeReturn) ;
    }
        else{
            showMessage("Do you wanna clean tables and paltes");
    }
    }
        else{
            showMessage("Invalid Amount ");
        }
    
});

function calculateChange (amountToBeReturn){
    for(let i=0; i<availableNotes.length; i++){
        const noOfNote = Math.trunc( amountToBeReturn / availableNotes[i]);

        amountToBeReturn =  amountToBeReturn % availableNotes[i];

        numberOfNotes[i].innerText = noOfNote;
    }
}


function hideMessage (){
   message.style.display = "none"
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}