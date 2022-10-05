"use strict";

// TODO - write your code here.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  if (randNum === 0) {
    return opt1;
  } else {
    return opt2;
  }
};

const attackPlayer = function (health) {
  const remainder = health - randomDamage();
  return remainder;
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Josh", "Brian", 538, 538);

// Extended Challenges

/* getGrade: This function takes in a number parameter (0 to 100). It returns the corresponding 
letter grade using the scale: A=90+, B=80+, C=70+, D=60+, F=below 60. Call the function with 
different numbers and log the results. (Note: there should be no console.log inside the function.)*/

const getGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else return "F";
};

console.log(getGrade(90));
console.log(getGrade(80));
console.log(getGrade(70));
console.log(getGrade(60));
console.log(getGrade(50));
