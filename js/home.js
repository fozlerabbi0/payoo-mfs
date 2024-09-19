// add money to the account
// step-1
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Money add btn clicked');
    // step-2:get money to be added to the account
    const inputAddMoney=document.getElementById('input-add-money').value;
    console.log(inputAddMoney);
    
    // get the pin number provided
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
    
});
