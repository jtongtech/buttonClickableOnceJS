var div = document.querySelectorAll('div');
var button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

div.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('CLICK!!!!!!');
}, {
    once: true
})