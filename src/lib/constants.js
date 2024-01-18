const cardScore = {
  "ac": 11,
	"ki": 10,
	"qu": 10,
	"ja": 10,
	"02": 2,
	"03": 3,
	"04": 4,
	"05": 5,
	"06": 6,
	"07": 7,
	"08": 8,
	"09": 9,
	"10": 10
}

// card_suite: file name
//TODO Update with card image names as values - import them from folder
const cardFace = {
	"ac_h": "a_h_face",
	"ac_d": 1,
	"ac_c": 1,
	"ac_s": 1,
	"ki_h": 1,
	"ki_d": 1,
	"ki_c": 1,
	"ki_s": 1,
	"qu_h": 1,
	"qu_d": 1,
	"qu_c": 1,
	"qu_s": 1,
	"ja_h": 1,
	"ja_d": 1,
	"ja_c": 1,
	"ja_s": 1,
	"02_h": 1,
	"02_d": 1,
	"02_c": 1,
	"02_s": 1,
	"03_h": 1,
	"03_d": 1,
	"03_c": 1,
	"03_s": 1,
	"04_h": 1,
	"04_d": 1,
	"04_c": 1,
	"04_s": 1,
	"05_h": 1,
	"05_d": 1,
	"05_c": 1,
	"05_s": 1,
	"06_h": 1,
	"06_d": 1,
	"06_c": 1,
	"06_s": 1,
	"07_h": 1,
	"07_d": 1,
	"07_c": 1,
	"07_s": 1,
	"08_h": 1,
	"08_d": 1,
	"08_c": 1,
	"08_s": 1,
	"09_h": 1,
	"09_d": 1,
	"09_c": 1,
	"09_s": 1,
	"10_h": 1,
	"10_d": 1,
	"10_c": 1,
	"10_s": 1,
	"back": "back"
}

// all cards in deck for hand draws
const cardBank = ["ac_h", "ac_d", "ac_c", "ac_s", "ki_h", "ki_d", "ki_c", "ki_s", "qu_h", "qu_d", "qu_c", "qu_s", "ja_h", "ja_d", "ja_c", "ja_s", "02_h", "02_d", "02_c", "02_s", "03_h", "03_d", "03_c","03_s", "04_h", "04_d", "04_c", "04_s", "05_h", "05_d", "05_c", "05_s", "06_h", "06_d", "06_c", "06_s", "07_h", "07_d", "07_c", "07_s", "08_h", "08_d", "08_c", "08_s", "09_h", "09_d", "09_c", "09_s", "10_h", "10_d", "10_c", "10_s"]

// player scores
const scores = {
	dealer: 0,
	user1: 0
}

// wins
const wins = {
	dealer: 0,
	user1: 0
}

// user hand and dealer hand
const dealerHand = []
const user1Hand = []

// used to determine if a player has an ace in their hand for point totals
const aceFlag = {
	dealer: false,
	user1: false
}

export { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand, aceFlag }