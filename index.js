function BoardMember (name, homeState, traing){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){console.log(`Hello everybody, my name is ${this.name}!`);}
  this.approve = function(){console.log(`Hello everybody, my name is ${this.name}!`);}
  this.doCharity = function(){console.log(`Hello everybody, my name is ${this.name}!`);}
  this.releasePressStatement = function(){console.log(`Hello everybody, my name is ${this.name}!`);}
  this.sayHi = function(){console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}!`);}
}