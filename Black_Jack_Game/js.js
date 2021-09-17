let player = {
    namme : "Player: ",
    chip : 200
};

let cardDeck = []
let sum = 0;
let feedback = "";
let isBlakjack = false;
let isAlive = false;

let response = document.getElementById("message");
let result = document.getElementById("sumEl");
let cards = document.querySelector(".cardEl");
let playerDetails = document.querySelector(".player-el");


function startGame(){
    isAlive = true;
    isBlakjack = false;
    let firstNumber = randomNumber();
    let secondNumber = randomNumber();
    cardDeck = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber;
    renderGame();
    player.chip -= 20;
    if (player.chip === 0){
        player.chip = 200;
    }
    
}

function renderGame(){
    result.innerHTML ="Sum: " + sum;
    cards.innerHTML ="Cards: "

    playerDetails.innerHTML = player.namme + "$" + player.chip;

    for(let i = 0; i < cardDeck.length; i++){
        cards.innerHTML += cardDeck[i] + ", ";
    }

    if(sum < 21){
        feedback = "Would you like to draw another card?";
    }else if(sum === 21){
        feedback = "Woohoo!, You've got Blackjack!"
        isBlakjack = true;
        if(isBlakjack === true){
             player.chip += 1000;
        }
    }else{
        feedback = "You lost this round"
        isAlive = false;
    }

    response.innerHTML = feedback;
}

function getCard(){
    if(isAlive === true && isBlakjack === false){
        let newCard =  randomNumber();
        cardDeck.push(newCard);
        sum += newCard;
        renderGame();
    }

}

function randomNumber(){
    return  Math.floor(Math.random()*10) + 2;
}

function getHelp(){
alert(`   The goal of blackjack is to beat the dealer's 
    hand without going over 21. Each player starts with two 
    cards, one of the dealer's cards is hidden until the end.
    A player starts with playerble chips worth 200$, of which
    20$ is deducted at every lost round. The player however 
    wins 1000$ after hitting Blackjack(21)`)
}
