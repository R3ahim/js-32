// console.log(class support {
//     name;
//     designation = 'support web Dev'
// })

class support{
    name;
    designation  = 'support web dev';
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support sesion');
}
}

const aamir = new support('aamir','sylhet');
const salman = new support('salman','chittagong'); 
const saruk = new support('saruk','chittagong'); 
const akshay = new support('akshay','chittagong'); 
// console.log(aamir);
// console.log(salman);
aamir.startSession();
salman.startSession()
saruk.startSession()
akshay.startSession()
console.log(aamir,salman,saruk,akshay);
