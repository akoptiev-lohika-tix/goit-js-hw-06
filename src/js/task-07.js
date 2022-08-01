const scrollBar = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleScrollValue = (event) => {
    const fontSize = String(event.currentTarget.value) + 'px';

    text.style.fontSize = fontSize;
};

scrollBar.addEventListener('input', handleScrollValue);
