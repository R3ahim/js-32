const numbers =  [5,13,7,41,30,5,2,19];
const bigNumber = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number <10)
// console.log(smallNumbers);



const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

]

// const expansive= products.filter(product=> product.price >= 300);

const blacks = products.filter(product => product.color == 'pink')
// console.log(blacks)


const whtieItem = products.find(product =>product.color == 'yellow');
console.log(whtieItem);
 



