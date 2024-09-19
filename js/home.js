// add money to the account
// step-1
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // step-2:get money to be added to the account
        const inputAddMoney = document.getElementById('input-add-money').value;
        console.log(inputAddMoney);

        // get the pin number provided
        const inputPinNumber = document.getElementById('input-pin-number').value;

        // step-3:verify pin 
        if (inputPinNumber === '1234') {
            // step-4:get current balance

            const mainBalance = document.getElementById('account-balance').innerText;
            console.log(mainBalance);


            // // step-5:add addmoneyinput with balance
            const addBalanceNumber = parseFloat(inputAddMoney);
            const balanceNumbers = parseFloat(mainBalance);
            const newBalance = addBalanceNumber + balanceNumbers;
            console.log(newBalance);
            // step-6
            // const finalNumber = document.getElementById('account-balance');
            // finalNumber.innerHTML = newBalance;
            document.getElementById('account-balance').innerText = newBalance;


        } else {
            alert('Faild to add money,Please try again!')
        }
    });
