const { words } = require("../data/words");
let guess = [];
let cur_word = "";

const findWordByProperty = (property, property_val) => {
  return words.find((ele) => {
    return ele[property] === property_val;
  });
};
const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

// write your handlers here...
// get the word by id
const handleWordId = (req, res) => {
  let w = findWordByProperty("id", req.params.id);
  if (w) {
    res.status(200).json({ status: 200, result: w });
  } else {
    res.status(404).json({
      status: 404,
      result: `The word with id ${req.params.id} not found`,
    });
  }
};
// generate a random word
const handleWord = (req, res) => {
  const { id, letterCount } = getRandomWord();
  res.status(200).json({
    status: 200,
    result: { id: `${id}`, letterCount: `${letterCount}` },
  });
};
const handleGuessLetter = (req, res) => {
  const { id, letter } = req.params;
  // check if letter is a letter
  if (letter.toUpperCase() === letter && letter.toLowerCase() === letter) {
    res.status(400).json({
      status: 400,
      result: "This is not a letter! Please enter a letter!",
    });
    return;
  }
  // if it's a different id then clean up the previous record (not specified in hw but guess it should work like this)
  if (cur_word["id"] !== id) {
    cur_word = "";
    guess = [];
  }

  // initialize the guess and the word if not
  if (cur_word === "") {
    //console.log(id, letter);
    cur_word = findWordByProperty("id", id);
    for (let k = 0; k < cur_word.letterCount; k++) {
      guess.push(false);
    }
  }
  // console.log(cur_word);
  // check index
  let ind = cur_word["word"].indexOf(letter);
  if (ind >= 0) {
    // set the ind to true
    guess[ind] = true;
    res.status(200).json({ status: 200, result: guess });
  } else {
    res.status(200).json({
      status: 200,
      result: `The letter ${letter} is not in the word!`,
    });
  }
};

module.exports = { handleWordId, handleWord, handleGuessLetter };
