import result from '../Result.js'

const menuHotDrinks = document.createElement('container');
    const btnTea = document.createElement('button');
    const btnAmericano = document.createElement('button');
    const btnCapuchino = document.createElement('button');
    const btnLatte = document.createElement('button');
const back = document.createElement('button');

const buttons = document.querySelectorAll('button');

const napojeGorance =
    [
        { id: 'tea', value: "Herbata", price: 10 },
        { id: 'americano', value: "Americano", price: 9 },
        { id: 'capuchino', value: "Capuchino", price: 12 },
        { id: 'latte', value: "Latte", price: 14 }
    ]
const hot = () => {
    buttons.forEach(button => {
        button.style.display = "none";
    });

    menuHotDrinks.classList.add('container');
    document.body.appendChild(menuHotDrinks);

    back.classList.add('button');
    back.textContent = 'Wstecz';
    menuHotDrinks.appendChild(back);

    btnTea.classList.add('button');
    btnTea.textContent = 'Herbata';
    menuHotDrinks.appendChild(btnTea);
    
    btnAmericano.classList.add('button');
    btnAmericano.textContent = 'Americano';
    menuHotDrinks.appendChild(btnAmericano);

    btnCapuchino.classList.add('button');
    btnCapuchino.textContent = 'Capuchino';
    menuHotDrinks.appendChild(btnCapuchino);

    btnLatte.classList.add('button');
    btnLatte.textContent = 'Latte';
    menuHotDrinks.appendChild(btnLatte);
}

btnTea.addEventListener('click', () => {
    result(napojeGorance[0].value, napojeGorance[0].price)
});
btnAmericano.addEventListener('click', () => {
    result(napojeGorance[1].value, napojeGorance[1].price)
});
btnCapuchino.addEventListener('click', () => {
    result(napojeGorance[2].value, napojeGorance[2].price)
});
btnLatte.addEventListener('click', () => {
    result(napojeGorance[3].value, napojeGorance[3].price)
});

back.addEventListener('click', () => {
    menuHotDrinks.textContent = '';
    buttons.forEach(button => {
        button.style.display = "block";
    });
})

export default hot;