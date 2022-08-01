function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

const handleChangeColor = () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorName.textContent = color;
};

changeColorButton.addEventListener('click', handleChangeColor);
