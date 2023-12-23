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
    console.log('HELLO I WORK')
    console.log('current card bank', cardBankCurrent)
    console.log('card bank', cardBankCurrent)
    console.log('dealer hand', dealerHandCurrent)
    console.log('user hand', user1HandCurrent)

    initializeHands(cardScore, getRandomInt)
  }

  // Run to build initial hand
  const initializeHands = (cardScore, getRandomInt) => {

    while (dealerHandCurrent.length < 2) {
      console.log("I'm in the loop")
      let i = getRandomInt(cardBankCurrent.length);

      // add card to dealer's hand
      user1HandCurrent.push(cardBankCurrent[i])
      console.log('userHandCurrent =====>', user1HandCurrent)
      
      // update dealer's score with card point value
      currentScore["user1"] = currentScore["user1"] + cardScore[cardBankCurrent[i].substring(0, 2)]
      console.log('user1 score', currentScore["user1"])
      
      cardBankCurrent.splice(i, 1)

      console.log('i',i)

      i = getRandomInt(cardBankCurrent.length)
      // add card to dealer's hand
      dealerHandCurrent.push(cardBankCurrent[i])
      
      // update dealer's score with card point value
      currentScore["dealer"] = currentScore["dealer"] + cardScore[cardBankCurrent[i].substring(0, 2)]
      console.log('dealer score', currentScore["dealer"])
      
      cardBankCurrent.splice(i, 1)
      
      console.log('i',i)
      console.log('cardBank length', cardBankCurrent.length)
      console.log('cardBank after splice', cardBankCurrent)
      console.log('current cardBank after splice', cardBankCurrent)
      console.log('userHand:', user1HandCurrent, 'dealerHand', dealerHandCurrent)
    }
    
  }

  const updateScore = (val, player, scores) => {
    var scoresClone = structuredClone(scores)

    scoresClone.player += val;
    console.log(scoresClone)
    return scoresClone
  }
  
  // on hit button click
  const drawCard = () => {
    // draw 1 card to the user's hand from the bank

    // needs condition for dealer to draw a card if hand point value is < 16
    // needs a condition for bust?
  }

  // on stay button click
  const stay = () => {
    // ends game, dealer's second card is revealed and point totals are calculated
      // if multiplayer is implemented then stay will only end the game for each player that stays
    // tally a count of dealer and player wins
  }

  return (
    <div className="App">
      <button onClick={()=>runGame(cardScore, getRandomInt)}>START GAME</button>
      <button onClick={()=>drawCard()}>HIT</button>
    </div>
  );
}

export default App;
