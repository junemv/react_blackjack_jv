import { useState } from 'react';
import './App.css';
import { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand, aceFlag } from './lib/constants';
import { getRandomInt } from './lib/func';
//TODO - create git repo

function App() {
  const [gameStart, setGameStart] = useState(false)

  const [cardBankCurrent, setCardBankCurrent] = useState(cardBank)
  const [user1HandCurrent, setUser1HandCurrent] = useState(user1Hand)
  const [dealerHandCurrent, setDealerHandCurrent] = useState(dealerHand)
  // let cardBankCurrent = structuredClone(cardBank)
  // let dealerHandCurrent = structuredClone(dealerHand)
  // let user1HandCurrent = structuredClone(user1Hand)
  let currentScore = structuredClone(scores)
  let currentWins = structuredClone(wins)
  let aceFlagCurrent = structuredClone(aceFlag)


  // Run to build initial hand and update score
  const initializeHands = () => {
    // reset game if cards are dealt already
    if (dealerHandCurrent.length > 0) {
      resetVars()
    }

    setGameStart(true)
    drawCard("user1", user1HandCurrent, setUser1HandCurrent)

    let count = 0
    // TODO - ENDLESS LOOP???????
    while (count < 2) {
      drawCard("user1", user1HandCurrent, setUser1HandCurrent)

      drawCard("dealer", dealerHandCurrent, setDealerHandCurrent)
      
      count = count + 1;
      
      console.log('cardBank length', cardBankCurrent.length)
      console.log('cardBank after splice', cardBankCurrent)
      console.log('current cardBank after splice', cardBankCurrent)
      console.log('userHand:', user1HandCurrent, 'dealerHand', dealerHandCurrent)
    }
  }

  // on hit button click - draws a card into player's hand, contains logic for dealer drawing extra card
  const hit = () => {
    drawCard("user1", user1HandCurrent, setUser1HandCurrent)

    console.log('userHand:', user1HandCurrent, 'dealerHand', dealerHandCurrent)
    
    // needs a condition for bust?
    if (currentScore["user1"] > 21) {
      stay()
    }

  }

  // on stay button click
  const stay = () => {
    setGameStart(false)

    // TODO - add logic to reveal dealer's hidden card here

    // dealer draws a card if hand point value is < 16
    while (currentScore["dealer"] < 16) {
      drawCard("dealer", dealerHandCurrent, setDealerHandCurrent)
    }

    // ends game, point totals compared to declare winner
      // if multiplayer is implemented then stay will only end the game for each player that stays
    // tally a count of dealer and player wins
    if (currentScore["user1"] > currentScore["dealer"]) {
      currentWins["user1"] += 1
      console.log("FINAL SCORE: dealer:", currentScore["dealer"], "player 1:", currentScore["user1"],"\nplayer 1 wins!!")
    } else {
      currentWins["dealer"] += 1
      console.log("FINAL SCORE: dealer:", currentScore["dealer"], "player 1:", currentScore["user1"],"\ndealer wins!!")
    }
    console.log("wins", currentWins)
  }

  // helper - draw card into player hand, add card score to player's total score
  const drawCard = (player, playerHand, setPlayerHand) => {
    // TODO - move newPlaerHand to the parent function for drawCard
      // then pass that array back to drawCard. setPlayerHand in parent func

    // draw 1 card to the player's hand from the bank
    let i = getRandomInt(cardBankCurrent.length);

    let newPlayerHand = []
    if (playerHand) {
      for (let card of playerHand) {
        newPlayerHand.push(card);
      }
    }
    newPlayerHand.push(cardBankCurrent[i])

    // updateScore(player, i)
    updateCardBank(cardBankCurrent[i])

    setPlayerHand(newPlayerHand)

    console.log(player, 'hand =====>', newPlayerHand)

    // cardBankCurrent.splice(i, 1)
  }

  // remove drawn card
  const updateCardBank = (drawnCard) => {
    let newCardBank = []
    for (let card of cardBankCurrent) {
      if (card !== drawnCard) {
        newCardBank.push(card)
      }
    }
    setCardBankCurrent(newCardBank)
  }

  // helper - used to update player's score with the value of a card at the assigned index inside of the card bank
  const updateScore = (player, i) => {
    currentScore[player] = currentScore[player] + cardScore[cardBankCurrent[i].substring(0, 2)]
    console.log('Player 1 score:', currentScore["user1"], 'Dealer score:', currentScore["dealer"])
  }

  // helper - used to reset varaibles on new game
  const resetVars = () => {
    // cardBankCurrent = structuredClone(cardBank)
    // dealerHandCurrent = structuredClone(dealerHand)
    // user1HandCurrent = structuredClone(user1Hand)
    // aceFlagCurrent = structuredClone(aceFlag)
  }

  return (
    <div className="App">
      <button onClick={()=>initializeHands()}>NEW GAME</button>
      <button onClick={()=>drawCard("user1", user1HandCurrent, setUser1HandCurrent)}>DRAW CARD</button>
      {gameStart === true && (
        <div>
          <button onClick={()=>hit()}>HIT</button>
          <button onClick={()=>stay()}>STAY</button>
        </div>
      )}
    </div>
  );
}

export default App;
