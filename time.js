let name = prompt('Напишите ваше имя странник?');

document.querySelector('h3').textContent = 'Приветствую  тебя путник ' + name;

document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString('en-US', { hour12: false });

setInterval(function() {
    document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString('en-US', { hour12: false })
}, 1000)

let colors = ['Coral', 'DodgerBlue', 'Cyan', 'DarkGoldenRod', 'GoldenRod', 'LightBlue', 'MistyRose', 'PapayaWhip', 'Salmon']

let index = 0

document.querySelector('button').onclick = function() {
    document.body.style.background = colors[index];
    index++;
    if (index >= colors.length) index = 0
}