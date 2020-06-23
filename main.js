const add = document.querySelector('.sizeUp');
const subtract = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const wynik = document.querySelector('p');

// let czcionka = window.getComputedStyle(wynik).fontSize;
let czcionka = 36;

const increase = () => {
    czcionka += 5;
    wynik.style.fontSize = czcionka + "px";
};

const iincrease = () => {
    czcionka -= 5;
    wynik.style.fontSize = czcionka + "px";
}

const kolor = () => {
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);

    wynik.style.color = `rgb(${r},${g},${b})`;
}

add.addEventListener('click', increase);
subtract.addEventListener('click', iincrease);
color.addEventListener('click', kolor);
