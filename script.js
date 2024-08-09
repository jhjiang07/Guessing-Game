var correctNum = Math.floor(Math.random() * 40) - 20;
var num = -50;
var tries = 1;
function start(){
  tries = 1;
  alert("Welcome to the Guessing Game!");
  num = prompt("Enter a number that is between -20 and 20:");
  while (num < -20 || num > 20) {
    num = prompt("Your number was invalid. You have had " + tries + " guesses.");
    repeat();
  }
  if (num > correctNum){
      alert("Your number was too high. You have had 1 guess.");
      repeat();
  } else if (num < correctNum){
      alert("Your number was too low. You have had 1 guess.");
      repeat();
  } else {
      alert("You guessed the correct number! Nice job! It took you " + tries + " tries.");
      return;
    }
}

function repeat(){
    while (num < -20 || num > 20) {
    num = prompt("Your number was invalid. You have had " + tries + " guesses.");
    repeat();
  }
      if (tries >= 5){
      alert("Sorry, you used up all your 5 tries. Your number was " + correctNum + ".");
      return;
    }

  num = prompt("Enter a number that is between -20 and 20:");
      if (num > correctNum){
        tries++;
        alert("Your number was too high. You have had " + tries + " guesses.");
        repeat();
        
      } 
      else if (num < correctNum){
        tries++; 
        alert("Your number was too low. You have had " + tries + " guesses.");
        repeat();
      } 
      else {
      alert("You guessed the correct number! Nice job! It took you " + tries + " tries.");
      return;
    }
  
  }




