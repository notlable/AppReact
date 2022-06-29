
import cold from './menu/ColdDrinks.js';
import hot from './menu/HotDrinks.js';
import alkohol from './menu/Alkohols.js';

const btnColdDrinks = document.querySelector('.coldDrinks');
const btnHotDrinks = document.querySelector('.hotDrinks');
const btnAlkohols = document.querySelector('.alkohols');


       
btnColdDrinks.addEventListener('click',cold);
btnHotDrinks.addEventListener('click',hot);
btnAlkohols.addEventListener('click',alkohol);




// const mapArray = (array,key)=>{
//     let result ={};
//     for(let i=0; i<array.length; i++){
//         result[array[i][key]] = array[i];
//     }
//     return result;
// }

 // function getValue(array,key){
//     let res = [];
//     for(let i=0; i<array.length; i++){
//         res.push(array[i][key])
//     }
//     return res;
// }

// function getValue(array, key) {
//     let res = [];
//     for(let i=0; i<array.length; i++){
//         res.push(array[i][key])
//     }
//     return res;
// }