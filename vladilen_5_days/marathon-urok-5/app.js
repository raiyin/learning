const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const board = document.querySelector('#board');
let time = 0;
const timeEl = document.querySelector('#time');
let score = 0;
let intervalId;

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    score = 0;
    board.innerHTML = '';
    timeEl.parentNode.classList.remove('hide');
    createRandomCircle();
    intervalId = setInterval(decreaseTime, 1000);
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        time--;
        setTime(time);
    }
}

function finishGame() {
    // timeEl.remove();
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`;
    const reloadButton = document.createElement('button');
    reloadButton.classList.add('reload');
    reloadButton.textContent = 'Play again';
    reloadButton.classList.add('btn');
    reloadButton.addEventListener('click', () => {
        screens[1].classList.remove('up');
        reloadButton.remove();
        startGame();
    });
    board.append(reloadButton);
    clearInterval(intervalId);
    time = 0;
}

function setTime(value) {
    timeEl.innerHTML = `00:${value < 10 ? '0' + value : value}`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 20);
    const { width, height } = board.getBoundingClientRect();

    circle.classList.add('circle');
    circle.style.top = getRandomNumber(size, height - size) + 'px';
    circle.style.left = getRandomNumber(size, width - size) + 'px';
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.backgroundColor = getRandomColor();
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
