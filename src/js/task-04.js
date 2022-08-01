let counterValue = 0;

const counterDisplay = document.querySelector('#counter #value');

const handleIncrement = () => {
    counterValue++;
    counterDisplay.innerHTML = String(counterValue);
};
const handleDecrement = () => {
    counterValue--;
    counterDisplay.innerHTML = String(counterValue);
};

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);
