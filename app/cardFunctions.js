let cardsLocations = [[], [], [], [], [], [], [], [], [], [], [], [], []];
const cards = ["1r", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "11d", "12d", "13d", "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "11s", "12s", "13s", "1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "11c", "12c", "13c"];

const shuffle = () => {
  const array = cards;
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  return array;
};

export const deal = () => {
  let nextCard;
  let index = 6;
  let i;
  let shuffledCards = shuffle();
  let dealingCards = shuffledCards.slice(0, 28);
  while (i !== index) {
    for (i = index; i < 13; i++) {
      if (!dealingCards.length) break;
      nextCard = dealingCards[0];
      cardsLocations[i].push(nextCard);
      dealingCards.shift();
    }
    index++;
  }
  cardsLocations[4] = shuffledCards.slice(28, 29);
  cardsLocations[5] = shuffledCards.slice(29);
  return cardsLocations;
};