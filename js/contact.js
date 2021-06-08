const sendBtn = document.querySelector('#submit');

// Error messages 
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const messageError = document.querySelector('.messageError');

sendBtn.onclick = function (event) {
    event.preventDefault();
    console.log('Event run');

    const name = document.querySelector('#name').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (testLen(name, 5)) {
        nameError.classList.add('hide');
        nameError.classList.remove('show');
    } else {
        nameError.classList.add('show');
        nameError.classList.remove('hide');
    }
    if (subject.length >= 15) {
        subjectError.classList.add('hide');
		subjectError.classList.remove('show');
    } else {
        subjectError.classList.add('show');
        subjectError.classList.remove('hide');
    }
    if (validateEmail(email)) {
        emailError.classList.add('hide');
        emailError.classList.remove( 'show');
    } else {
        emailError.classList.add( 'show');
        emailError.classList.remove('hide');
    }
    if (testLen(message, 25)) {
        messageError.classList.add('hide');
        messageError.classList.remove('show');
    } else {
        messageError.classList.add('show');
        messageError.classList.remove('hide');
    }
    console.log(name);
    console.log(subject);
    console.log(email);
    console.log(message);
};

function validateEmail(emailAddy) {
    const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailExpression.test(emailAddy);
    return isEmailValid;
}

function testLen(elm, len) {
    if (elm.length > len) {
        return true;
    } else {
        return false;
    }
}