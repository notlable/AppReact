import result from '../Result.js'

const menuAlkohol = document.createElement('container');
const btnBear = document.createElement('button');
const btnWine = document.createElement('button');
const btnVodka = document.createElement('button');
const btnWhisky = document.createElement('button');
const back = document.createElement('button');
const i = document.querySelector('i');

const buttons = document.querySelectorAll('button');

const napojeAlkohol =
    [
        { id: 'bear', value: "Piwo", price: 15 },
        { id: 'wine', value: "Wino", price: 80 },
        { id: 'vodka', value: "Wódka", price: 99 },
        { id: 'whisky', value: "Whisky", price: 134 }
    ]
const alkohol = () => {
    buttons.forEach(button => {
        button.style.display = "none";
    });

        menuAlkohol.classList.add('container');
        document.body.appendChild(menuAlkohol);

            back.classList.add('back');
            back.textContent = 'Wstecz';
    menuAlkohol.appendChild(back);

                btnBear.classList.add('button');
                btnBear.textContent = 'Piwo';
                menuAlkohol.appendChild(btnBear);

                btnWine.classList.add('button');
                btnWine.textContent = 'Wino';
                menuAlkohol.appendChild(btnWine);

                btnVodka.classList.add('button');
                btnVodka.textContent = 'Wódka';
                menuAlkohol.appendChild(btnVodka);

                btnWhisky.classList.add('button');
                btnWhisky.textContent = 'Whisky';
                menuAlkohol.appendChild(btnWhisky);
}

btnBear.addEventListener('click', () => {
    result(napojeAlkohol[0].value, napojeAlkohol[0].price)
});
btnWine.addEventListener('click', () => {
    result(napojeAlkohol[1].value, napojeAlkohol[1].price)
});
btnVodka.addEventListener('click', () => {
    result(napojeAlkohol[2].value, napojeAlkohol[2].price)
});
btnWhisky.addEventListener('click', () => {
    result(napojeAlkohol[3].value, napojeAlkohol[3].price)
});

back.addEventListener('click', () => {
    menuAlkohol.textContent = '';
    buttons.forEach(button => {
        button.style.display = "block";
    });
})

export default alkohol;