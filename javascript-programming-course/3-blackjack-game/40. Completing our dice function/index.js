// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 ) + 1

// console.log(randomNumber)

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceRoll = rollDice();

console.log(diceRoll);
