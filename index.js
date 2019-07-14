// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

  //initialze age/counter, keep executing code while age < 40
  //Stop point == age > 40
  //increase age by 1 every time code executes


//   var f = () => { 'use strict'; return this; };
  function writeCards(names, eventName) {
    let thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYous
  }

  function countdown(num) {
      while (num > -1) {
          console.log(num);
          num --;
      }
  }