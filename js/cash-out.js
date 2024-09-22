document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin-number').value;
    console.log(cashOut,pinNumber);
    // wrong way to verify pin number
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance')
        .innerText;
       const balanceNumber = parseFloat(balance);

    //    reduce the balance
    const newBalance = balanceNumber - cashOutNumber;

    // update new UI
    document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('Faild to Cashout,Please try again letter!')
    }
    
})