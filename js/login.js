// // console.log('input my login');

// // document.getElementById('button-login').addEventListener('click',function()

// // search: from submit reloting the page

// // step-1
// document.getElementById('button-login')
// .addEventListener('click',function(event){
//     // step-2
//     event.preventDefault();  
//     // vejal to begener
//     console.log('login button clicked');
    
// // step-3
// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber , pinNumber);

// // step-4
// if(phoneNumber === '5' && pinNumber === '1234'){
//     console.log('you are logged in');
//     // step-5
// }else{
//     alert('wrong phone number and pin number')
// }
// })

document.getElementById('button-login')
.addEventListener('click',function(event){
    event.preventDefault();
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber,pinNumber);
if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href= '/home.html'
}else{
    alert('wrong phone number and pin number')
}

})