// #surname, #other-names, #faculty, #department, #lga, #email-address, #whatsapp-number
let surname = '';
let otherNames ='';
let faculty ='';
let department ='';
let emailAddress ='';
let whatsappNumber ='';
let submitBtn ='';
let myForm = '';

function checkFormInput(){
    surname = document.getElementById('surname').value;
    otherNames =document.getElementById('other-names').value;
    faculty =document.getElementById('faculty').value;
    department =document.getElementById('department').value;
    emailAddress =document.getElementById('email-address').value;
    whatsappNumber =document.getElementById('whatsapp-number').value;
    submitBtn =document.getElementById('submit-btn');
    myForm = document.getElementById('my-form');

    console.log(surname, otherNames)

    if(surname!= '' && otherNames!= '' && faculty!= '' && department!= '' && emailAddress!= '' && whatsappNumber!= ''){
        alert(`${otherNames}, your response has been recorded`)
    }
    // myForm.reset();
}