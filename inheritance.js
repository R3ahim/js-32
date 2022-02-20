
class TeamMember{
    name;
    designation  = 'support web dev';
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}
class support extends TeamMember{
    groupSupporTime;
    constructor(time,address,name){
        super(name,address)
        this.groupSupporTime = time;
    }
   
    startSession(){
        console.log(this.name,'start a support sesion');
}
}

class StudentCare extends TeamMember {
 
    buildARoutine(student){
        console.log(this.name,'build a rutine',student);
    }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  constructor(name,address,editor){
      super(name,address)
      this.codeEditor = editor;
  }
    releaseApp(version){
        console.log(this.name,'release app rutine',version);
    }
}

const aamir = new support('aamir','sylhet',11);
const salman = new support('salman','chittagong',4); 
const saruk = new support('saruk','chittagong',7); 
const akshay = new support('akshay','chittagong'); 


const alia = new StudentCare('alia Bhatt','Munbai');
const ash = new NeptuneDev('ash','dhaka','visual-stodio');
ash.releaseApp('1.2323')
// console.log(ash);
// console.log(ash.address);

