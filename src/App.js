import './App.css';
import { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand } from './lib/constants';
import { getRandomInt } from './lib/func';
//TODO - create git repo

function App() {

  // on start button click 
  const startGame = (cardScore, cardBank, scores, dealerHand, user1Hand, getRandomInt) => {
    // starts dealer and player w/ 1 card
      // dealer's is face down - will add when graphics are added (card dict should have a value of [quantity, card_face])
      // second card is drawn face up for player and dealer
    console.log('HELLO I WORK')
    console.log('card bank', cardBank)
    console.log('dealer hand', dealerHand)
    console.log('user hand', user1Hand)
    
    //TODO - this isn't going to work, research pop, I want to pop a random index from the card bank using getRandomInt
    // user1Hand.push(cardBank.pop(getRandomInt(cardBank.length())));
    while (dealerHand.length < 2) {
      console.log("I'm in the loop")
      let i = getRandomInt(cardBank.length);
      // use random to generate random number for i
      // push element from i to user hands, then delete cardBank[i]
      user1Hand.push(cardBank[i])
      cardBank.splice(i, 1)

      console.log('i',i)

      i = getRandomInt(cardBank.length)
      dealerHand.push(cardBank[i])
      cardBank.splice(i, 1)
      console.log('i',i)
      console.log('cardBank length', cardBank.length)
      console.log('cardBank after splice', cardBank)
      console.log('userHand:', user1Hand, 'dealerHand', dealerHand)
    }
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
      <button onClick={()=>startGame(cardScore, cardBank, scores, dealerHand, user1Hand, getRandomInt)}>PUSH ME</button>
    </div>
  );
}

export default App;
