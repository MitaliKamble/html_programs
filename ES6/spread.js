//-------------------spread operator---------------------//

// const arr = ["one", "two", "three", "four", "five"]
// const newArr = ["six", "seven", ...arr];
// console.log(newArr)

// ------------------Asynchronous in JavaScript--------------------//
const sayHii = () => {
  console.log("It is sayHii function");
};
const sayHello = () => {
  console.log("begining og the sayHello");
  setTimeout(()=>{  //callback function
    sayHii();
  },5000)
  console.log("End of the sayHello function");
};
sayHello();//function calling
