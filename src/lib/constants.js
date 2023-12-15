const cardScore = {
  "a": 11,
	"k": 10,
	"q": 10,
	"j": 10,
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	"10": 10
}

// card_suite: file name
//TODO Update with card image names as values - import them from folder
const cardFace = {
	"a_h": "a_h_face",
	"a_d": 1,
	"a_c": 1,
	"a_s": 1,
	"k_h": 1,
	"k_d": 1,
	"k_c": 1,
	"k_s": 1,
	"q_h": 1,
	"q_d": 1,
	"q_c": 1,
	"q_s": 1,
	"j_h": 1,
	"j_d": 1,
	"j_c": 1,
	"j_s": 1,
	"2_h": 1,
	"2_d": 1,
	"2_c": 1,
	"2_s": 1,
	"3_h": 1,
	"3_d": 1,
	"3_c": 1,
	"3_s": 1,
	"4_h": 1,
	"4_d": 1,
	"4_c": 1,
	"4_s": 1,
	"5_h": 1,
	"5_d": 1,
	"5_c": 1,
	"5_s": 1,
	"6_h": 1,
	"6_d": 1,
	"6_c": 1,
	"6_s": 1,
	"7_h": 1,
	"7_d": 1,
	"7_c": 1,
	"7_s": 1,
	"8_h": 1,
	"8_d": 1,
	"8_c": 1,
	"8_s": 1,
	"9_h": 1,
	"9_d": 1,
	"9_c": 1,
	"9_s": 1,
	"10_h": 1,
	"10_d": 1,
	"10_c": 1,
	"10_s": 1,
	"back": "back"
}

// all cards in deck for hand draws
const cardBank = ["a_h", "a_d", "a_c", "a_s", "k_h", "k_d", "k_c", "k_s", "q_h", "q_d", "q_c", "q_s", "j_h", "j_d", "j_c", "j_s", "2_h", "2_d", "2_c", "2_s", "3_h", "3_d", "3_c","3_s", "4_h", "4_d", "4_c", "4_s", "5_h", "5_d", "5_c", "5_s", "6_h", "6_d", "6_c", "6_s", "7_h", "7_d", "7_c", "7_s", "8_h", "8_d", "8_c", "8_s", "9_h", "9_d", "9_c", "9_s", "10_h", "10_d", "10_c", "10_s"]

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

export { cardScore, cardBank, cardFace, scores, wins, dealerHand, user1Hand }