function BoardMember (name, homeState, traing){
  this.name = name;
  this.homeState = homeState;
   this.training = training;
  this.sayHello = function(){
  console.log(`Hello everybody, my name is ${this.name}!`);
  }
