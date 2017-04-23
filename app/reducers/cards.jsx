import React from 'react';
import { deal } from '../cardFunctions';


let initialState = {
    cards: deal()
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
  case 'PLAY_TO_PLAY':
    const cardMoving = state.cards[action.firstPlayId].shift();
    state.cards[action.secondPlayId].unshift(cardMoving);
    break;
  }
  console.log('changed state: ', state)
  return state
}

export const playToPlay = (firstPlayId, secondPlayId) => {
    return {
        type: 'PLAY_TO_PLAY',
        firstPlayId,
        secondPlayId
    }
}

export default reducer;