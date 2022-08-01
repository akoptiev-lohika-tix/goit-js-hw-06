const form = document.querySelector('.login-form');
const userData = {};

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
    }

    userData['email'] = email.value;
    userData['password'] = password.value;
    console.log(userData);

    event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);
