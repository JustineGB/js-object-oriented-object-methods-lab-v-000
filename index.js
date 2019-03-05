function BoardMember (name, email){
  this.name = name;
  this.email = email;
  this.sayHello = function(){
  console.log(`Hello everybody, my name is ${this.name}!`);
  }
