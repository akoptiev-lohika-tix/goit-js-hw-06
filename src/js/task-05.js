const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleInputChange = (event) =>
    (output.textContent = event.currentTarget.value || 'Anonymous');

textInput.addEventListener('input', handleInputChange);
