// Comment resoudre ce meme probleme sans utiliser un arbre  a else if

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

for (btn of btns) {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList.value;
        // console.log(styles);
        switch (styles) {
            case 'btn increase':
                count++;
                value.textContent = count;
                value.style.color = 'green';
                break;
            case 'btn decrease':
                count--;
                value.textContent = count;
                value.style.color = 'red';
                break;
            case 'btn reset':
                count = 0;
                value.textContent = count;
                value.style.color = '#222';
                break;
        }
        // if (styles.contains('decrease')) {
        //     count--;
        // } else if (styles.contains('increase')) {
        //     count++;
        // } else {
        //     count = 0;
        // }
        // if (count > 0) {
        //     value.style.color = 'green';
        // } if (count < 0) {
        //     value.style.color = 'red';
        // } else if (count === 0) {
        //     value.style.color = '#222';
        // }
        // value.textContent = count;
    })

}




