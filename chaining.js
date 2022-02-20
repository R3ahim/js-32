// declare variable based on the name of an object progper
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const {x,b} = myObject;
// console.log('my object .p',myObject?.p?.q);


// destructring array
const [p,q] = [45,37,23,36]
// console.log(p,q);






const [best,faltu] = ['rahim','kokonut'];
console.log(best,faltu);

const {sky,color,money} = {sky:'blue',soil:'matti',color:'red',money:500};






const company = {
    name : 'GP',
    ceo:{id:1,name:'ajmol',food:'fuchka'},
    web:{
        work:'website development',
        employee:22,
        framework:'rect',
        tech:{
            first : 'html',
            second:'css',
            third:'js'
        }
    }
    }
            console.log(company?.web?.tech?.third);       
 console.log(company?.backend?.tech?.third)


programming hero