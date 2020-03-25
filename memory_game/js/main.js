console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen")
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You fond a match!")
	}
	else{
		alert("Sorry try again")
	}
}