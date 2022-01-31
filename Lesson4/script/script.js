
// const button = document.querySelector('.btn');
const button = document.getElementsByClassName('btn');

console.log(buttons[0]);

function show() {
    // alert('Hello, Its me - Adelle');
    // button.classList.add('newstyle');
    // button.classList.toggle('newstyle');
};


button.addEventListener('click', show);
// document.querySelector('.btn').addEventListener('click', show);

// GamepadButton.addEventListener('click', show);

// alternative way touse arrow function
// button.addEventListener('click', () => {button.classList.add('newstyle')});