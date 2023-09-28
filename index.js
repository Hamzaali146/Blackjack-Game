let plname = prompt("Hey! What's Your name: ","User")
let player = {

    name: "Per",
    chips: 0
}
player.name = plname
let record = 0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let gifEL= document.getElementById("myImage")
let recordEl = document.getElementById("record-el")
let rules = document.getElementById("rules")
let ruleEl =document.getElementById("rule-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    ruleEl.innerText=""
    gifEL.src="images/sunglass.png"
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    record++
    recordEl.textContent = "You have played "+record+" number of Games!"
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Dealer: Do you want to draw a new card?"
    } else if (sum === 21) {
        player.chips+=200
        playerEl.textContent = player.name + ": $" + player.chips
        gifEL.src="images/3.png"
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        gifEL.src="images/sad.png"
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    ruleEl.innerHTML=""
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
rules.addEventListener("click",function(){
    ruleEl.innerHTML = "If your first 2 cards add up to <strong> 21 </strong>(an Ace and a card valued 10), that's Blackjack! If they have any other total, decide whether you wish to 'draw' or 'stay'. You can continue to draw cards until you are happy with your hand."
})
