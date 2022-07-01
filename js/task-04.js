const counterValue = {
    value: 0,
        getIncrement() {
            this.value += 1;
        },
        getDecrement() {
            this.value -= 1;
        },
        
};
const incrementBtn = document.querySelector('[data-action = increment]');
const decrementBtn = document.querySelector('[data-action = decrement]')
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function() {
    counterValue.getDecrement();
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function() {
    counterValue.getIncrement();
    valueEl.textContent = counterValue.value;
});


