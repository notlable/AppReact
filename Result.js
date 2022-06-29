
const divChek = document.querySelector('.chek');
const divResult = document.querySelector('.result');
divResult.classList.add('result');
let suma = 0;

 const result = (value,price) => {
    const div = document.createElement('div');
    const position = document.createElement('p');
    const positionPrice = document.createElement('p');

    div.classList.add('div');
    position.classList.add('position');
    positionPrice.classList.add('positionPrice');

    position.textContent = value;
    positionPrice.textContent = price + ' zł';

    divChek.appendChild(div)
    div.appendChild(position);
    div.appendChild(positionPrice);
    suma = suma + price;

    divResult.textContent = 'Suma: ' + suma + 'zł';
}

// 
export default result;