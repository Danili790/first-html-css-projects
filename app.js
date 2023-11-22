const colors = ["green", "red", "rgba(133, 122, 200)", "#f1f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getColors();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})

const getColors = () => {
    return Math.floor(Math.random() * colors.length);
}

