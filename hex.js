const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 3; i++) {
        hexColor += hex[getColors()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
const getColors = () => {
    return Math.floor(Math.random() * hex.length);
}