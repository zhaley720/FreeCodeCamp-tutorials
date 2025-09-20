// let firstCard = 6
// let secondCard = 9

let firstCard = 1 + Math.floor(Math.random() * 11);
let secondCard = 1 + Math.floor(Math.random() * 11);

let sum = firstCard + secondCard

console.log("first card = " + firstCard);
console.log("second card = " + secondCard);
console.log("sum = " + sum);
console.log();

if (sum < 21) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("woohoo! you've got blackjack!");
} else {
    console.log("you're out of the game");
}