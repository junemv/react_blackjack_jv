import { useState } from 'react';
import './App.css';
import { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand } from './lib/constants';
import { getRandomInt } from './lib/func';
//TODO - create git repo

function App() {
  let cardBankCurrent = structuredClone(cardBank)
  let dealerHandCurrent = structuredClone(dealerHand)
  let user1HandCurrent = structuredClone(user1Hand)
  let currentScore = structuredClone(scores)

  // Run on start or reset button click 
  const runGame = (cardScore, getRandomInt) => {
    // reset game if cards are dealt already
    if (dealerHandCurrent.length > 0) {
      cardBankCurrent = structuredClone(cardBank)
      dealerHandCurrent = structuredClone(dealerHand)
      user1HandCurrent = structuredClone(user1Hand)
      currentScore = structuredClone(scores)
    }
    
    // starts dealer and player w/ 2 cards
      // dealer's is face down - will add when graphics are added (card dict should have a value of [quantity, card_face])
      // second card is drawn face up for player and dealer
    console.log('current card bank', cardBankCurrent)
    console.log('card bank', cardBankCurrent)
    console.log('dealer hand', dealerHandCurrent)
    console.log('user hand', user1HandCurrent)

    initializeHands(getRandomInt)
  }

  // Run to build initial hand and update score
  const initializeHands = (getRandomInt) => {
    // we could have initialize hand run draw card

    while (dealerHandCurrent.length < 2) {
      drawCard("user1", user1HandCurrent)

      drawCard("dealer", dealerHandCurrent)
      
      console.log('cardBank length', cardBankCurrent.length)
      console.log('cardBank after splice', cardBankCurrent)
      console.log('current cardBank after splice', cardBankCurrent)
      console.log('userHand:', user1HandCurrent, 'dealerHand', dealerHandCurrent)
    }
    
  }

  // function for hit button
  const hit = () => {
    // should contain logic for dealer to draw extra card if point total is < 16
  }

  // draw card into player hand, add card score to player's total score
  const drawCard = (player, playerHand) => {
    // draw 1 card to the player's hand from the bank
    let i = getRandomInt(cardBankCurrent.length);

    playerHand.push(cardBankCurrent[i])
    console.log(player, 'hand =====>', playerHand)

    updateScore(player, i)

    cardBankCurrent.splice(i, 1)

    // needs condition for dealer to draw a card if hand point value is < 16
    // needs a condition for bust?
  }

  // on stay button click
  const stay = () => {
    // ends game, dealer's hidden card is revealed and point totals are calculated
      // if multiplayer is implemented then stay will only end the game for each player that stays
    // tally a count of dealer and player wins
  }

  const updateScore = (player, i) => {
    currentScore[player] = currentScore[player] + cardScore[cardBankCurrent[i].substring(0, 2)]
    console.log(player, 'score', currentScore[player])
  }

  return (
    <div className="App">
      <button onClick={()=>runGame(cardScore, getRandomInt)}>NEW GAME</button>
      <button onClick={()=>hit()}>HIT</button>
      <button onClick={()=>stay()}>STAY</button>
    </div>
  );
}

export default App;
