class user {
  constructor (name, age) {
    this.name =name;
    this.age = age;
  }    

getdetails() 
{
    return `Name: ${this.name}, Age: ${this.age}`;
}
}
    const user1 =new user("giri",21);
    console.log(user1.getdetails());        