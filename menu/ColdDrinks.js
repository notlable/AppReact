import result from '../Result.js'

const menuColdDrinks = document.createElement('container');
    const btnCola = document.createElement('button');
    const btnSprite = document.createElement('button');
    const btnGaz = document.createElement('button');
    const btnNieGaz = document.createElement('button');
const back = document.createElement('button');

const buttons = document.querySelectorAll('button');

const napoje =
    [
        { id: 'cola', value: "Cola", price: 7 },
        { id: 'sprite', value: "Sparite", price: 6 },
        { id: 'gaz', value: "Woda gazowana", price: 5 },
        { id: 'nieGaz', value: "Woda nie gazowana", price: 5 }
    ]

const cold =()=> {
    buttons.forEach(button => {
        button.style.display = "none";
    });

    menuColdDrinks.classList.add('container');
    document.body.appendChild(menuColdDrinks);

    back.classList.add('button');
    back.textContent = 'Wstecz';
    menuColdDrinks.appendChild(back);

    btnCola.classList.add('button');
    btnCola.textContent = 'Cola';
    menuColdDrinks.appendChild(btnCola);
    btnSprite.classList.add('button');
    btnSprite.textContent = 'Sprite';
    menuColdDrinks.appendChild(btnSprite);

    btnGaz.classList.add('button');
    btnGaz.textContent = 'Woda gazowana';
    menuColdDrinks.appendChild(btnGaz);

    btnNieGaz.classList.add('button');
    btnNieGaz.textContent = 'Woda nie gazowana';
    menuColdDrinks.appendChild(btnNieGaz);
}

btnCola.addEventListener('click', () => {
    result(napoje[0].value, napoje[0].price)
});
btnSprite.addEventListener('click', () => {
    result(napoje[1].value, napoje[1].price)
});
btnGaz.addEventListener('click', () => {
    result(napoje[2].value, napoje[2].price)
});
btnNieGaz.addEventListener('click', () => {
    result(napoje[3].value, napoje[3].price)
});

back.addEventListener('click', () => {
    menuColdDrinks.textContent = '';
    buttons.forEach(button => {
        button.style.display = "block";
    });
})

export default cold;