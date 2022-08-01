function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let numberOfBoxes = 0;

const boxes = document.querySelector('#boxes');
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.gap = '10px';

const inputNumberOfBoxes = document.querySelector('input');
const addBoxesButton = document.querySelector('[data-create]');
const removeBoxesButton = document.querySelector('[data-destroy]');

const createBoxes = (amount) => {
    const boxesCollection = [];
    let boxHeight = 30;
    let boxWidth = 30;

    for (let i = 0; i < amount; i++) {
        if (i >= 1) {
            boxHeight += 10;
            boxWidth += 10;
        }

        const box = document.createElement('div');
        box.textContent = String(i + 1);
        box.style.height = boxHeight + 'px';
        box.style.width = boxWidth + 'px';
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.alignContent = 'center';
        box.style.backgroundColor = getRandomHexColor();
        boxesCollection.push(box);
    }

    boxes.append(...boxesCollection);
};

const handleAddBoxes = () => {
    numberOfBoxes = Number(inputNumberOfBoxes.value);

    const maxNumberOfBoxes = inputNumberOfBoxes.getAttribute('max');
    const minNumberOfBoxes = inputNumberOfBoxes.getAttribute('min');

    if (numberOfBoxes < minNumberOfBoxes || numberOfBoxes > maxNumberOfBoxes) {
        alert(
            `Please enter valid number: from ${minNumberOfBoxes} to ${maxNumberOfBoxes}`
        );

        return;
    }

    createBoxes(numberOfBoxes);
    inputNumberOfBoxes.value = '';
};

const handleRemoveBoxes = () => (boxes.innerHTML = '');

addBoxesButton.addEventListener('click', handleAddBoxes);
removeBoxesButton.addEventListener('click', handleRemoveBoxes);