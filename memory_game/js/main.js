
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
		{
		rank: "king",
		suit: "diamons",
		cardImage: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];
let score = 0;

function resetBoard(){

	for ( let i = 0; i <= cardsInPlay.length; i++){
		cardsInPlay.pop();
	}

	for (let i = 0 ; i < cards.length; i++){
		let cardElement = document.querySelector('img');
		cardElement.remove();
	}

	createBoard();
}

function checkForMatch(){
	
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			score += 1;
			document.getElementById('score').textContent= score;
		}
		else{
			alert("Sorry try again");
		}
		document.getElementById('button').addEventListener('click', resetBoard);
	}
	
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//show front of card
	this.setAttribute('src', cards[cardId].cardImage);
	//push card into cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	//call CheckForMatch
	checkForMatch();
}

function createBoard(){
	for ( let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();