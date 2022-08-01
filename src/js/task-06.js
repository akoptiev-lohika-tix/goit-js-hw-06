const textInput = document.querySelector('#validation-input');

const dataLength = Number(textInput.getAttribute('data-length'));

const handleInputChange = (event) => {
    if (event.currentTarget.value.length !== dataLength) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
};

textInput.addEventListener('input', handleInputChange);
