const fish = {id:58 ,name:'king hilsha',price : 9000,phone:'01723234323', address : 'chandput',dress:'silver'};
// const phone=fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone,price,dress,id} = fish;
 
// console.log(phone,price);
// console.log(phone,dress);
// console.log(phone);
// console.log(phone,id);
// console.log(phone);

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
//    const work = company.web.work;
//    const framework = company.web.framework;

const {work,framework} = company.web;
const {food} = company.ceo
const {second,third} = company.web.tech;
   console.log(framework,work,food,second);


