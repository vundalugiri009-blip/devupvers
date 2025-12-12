class user {   
  constructor (name,  mail) {
    this.name = name;  
    this.mail = mail;
  }    

getdetails() 
{
    return `Name: ${this.name}, Age: ${this.age}`;
}
}
    const user1 =new user("giri",21);
    console.log(user1.getdetails());        
//extend class
class adminuser extends user {
    constructor(name, mail, role) {
        super (name, mail);
        this.role = role;

    }
    getadmindetails(){
        return `Name: ${this.name}, Mail: ${this.mail}, Role: ${this.role}`

    }
}
// Creating objects
const user1= new user("giri", "giri009@gmail.com",);
console.log(user1.getdetails());        
const admin1= new adminuser("ajay", "ajay009@gmail.com", "superadmin"); 
console.log(admin1.getadmindetails());  