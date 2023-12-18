import './App.css';
import { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand } from './lib/constants';
import { getRandomInt } from './lib/func';
//TODO - create git repo

function App() {

  // Run on start or reset button click 
  const runGame = (cardScore, cardBank, scores, dealerHand, user1Hand, getRandomInt) => {
    // starts dealer and player w/ 2 cards
      // dealer's is face down - will add when graphics are added (card dict should have a value of [quantity, card_face])
      // second card is drawn face up for player and dealer
    console.log('HELLO I WORK')
    console.log('card bank', cardBank)
    console.log('dealer hand', dealerHand)
    console.log('user hand', user1Hand)

    // the deck of cards - mutated as cards are drawn
    var cardBankClone = structuredClone(cardBank);

    // player hands
    var dealerHandClone = structuredClone(dealerHand);
    var user1HandClone = structuredClone(user1Hand);

    // player scores for current game
    var scoresClone = structuredClone(scores)

    var initialHandObj = initializeHands(cardBankClone, dealerHandClone, user1HandClone, scoresClone, cardScore)
    // update w/ initial hand results
    cardBankClone = initialHandObj.cardBank;
    dealerHandClone = initialHandObj.dealerHand;
    user1HandClone = initialHandObj.user1Hand;
    scoresClone = initialHandObj.scores;
    
    
  }

  // Run to build initial hand
  const initializeHands = (cardBank, dealerHand, user1Hand, scores, cardScore) => {

    while (dealerHand.length < 2) {
      console.log("I'm in the loop")
      let i = getRandomInt(cardBank.length);

      // add card to dealer's hand
      user1Hand.push(cardBank[i])
      console.log(cardBank[i][0], "score:", cardScore[cardBank[i][0]])
      
      // update dealer's score with card point value
      scores["user1"] = scores["user1"] + cardScore[cardBank[i][0]] 
      console.log('user1 score', scores["user1"])
      
      cardBank.splice(i, 1)

      console.log('i',i)

      i = getRandomInt(cardBank.length)
      // add card to dealer's hand
      dealerHand.push(cardBank[i])
      
      // update dealer's score with card point value
      scores["dealer"] = scores["dealer"] + cardScore[cardBank[i][0]] 
      console.log('dealer score', scores["dealer"])
      
      cardBank.splice(i, 1)
      
      console.log('i',i)
      console.log('cardBank length', cardBank.length)
      console.log('cardBank after splice', cardBank)
      console.log('userHand:', user1Hand, 'dealerHand', dealerHand)

      return { "cardBank": cardBank, "dealerHand": dealerHand, "user1Hand": user1Hand, "scores": scores }

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
      <button onClick={()=>runGame(cardScore, cardBank, scores, dealerHand, user1Hand, getRandomInt)}>START GAME</button>
      <button onClick={()=>drawCard()}>HIT</button>
    </div>
  );
}

export default App;
