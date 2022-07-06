const form = document.querySelector('.login-form');

form.addEventListener('submit', handlingForm);

function handlingForm(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
     return alert('Заполните все строки')
    }
    console.log(`email: ${email.value}; password: ${password.value}`);
    event.currentTarget.reset();
}
