const numbers = [4, 6,8,10 ];

const ouput2 = [];

// function doubleOld(number){
//     return number * 2;
// }

const doubleIt = number => number  * 2;
for(const number of numbers){
    const result =doubleIt(number);
  ouput2.push(result)

}
// console.log(ouput2); 
 // 1 . loop
// 2 . element diye function ke call korsi
//3. result ekta array or m odde push korsi;


// const ouput = numbers.map(doubleIt)
const output = numbers.map(u => u * 2)
console.log(output);
const square = numbers.map(u => u *u);
console.log(square)