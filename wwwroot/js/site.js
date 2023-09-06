
const vidContainer = document.getElementById('vidContainer');
let isYellow = true;

    vidContainer.addEventListener('click', () => {
        if (isYellow) {
    vidContainer.style.background = 'blue';
        } else {
    vidContainer.style.background = 'yellow';
        }
isYellow = !isYellow;
    });