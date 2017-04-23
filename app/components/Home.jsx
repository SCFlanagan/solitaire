import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playToPlay } from '../reducers/cards';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCards: null
        }
        this.selectPlayCards = this.selectPlayCards.bind(this);
    }

    selectHomeCard(card) {
        // if there's a card already selected, check if the home card just selected is empty or not.
            // if card is undefined, check if the previous card is an ace. if it is, allow it.
            // if there is a card, check that the just selected card is of the same suit and also the next greater value, if it is allow it.
        // if this is the first card selected, push the card to the selectedCards
    }

    dealOneCard() {
        // move the next card from the stock pile and turn it face up
    }

    faceUpPile() {
        // if selectedCards is empty, push to selectedCards
        // if there is a card in selectedCards, do nothing
    }

    selectPlayCards(card, cardId) {
        if (this.state.selectedCards) {
            if (!card) {
                // Trying to put a card in play in a blank row, only allow it if the card they are trying to move is a king. Otherwise, do nothing. 
            } else {
                // Find the value and suit of the card and the previous card. If the first is smaller and of an opposite color, allow the move.
                const cardValue = Number(card.slice(0, card.length-1));
                const cardSuit = card[card.length-1];
                const prevCard = this.state.selectedCards.value;
                const prevCardValue = Number(prevCard.slice(0, prevCard.length-1));
                const prevCardSuit = prevCard[prevCard.length-1];
                let correctSuit = false;
                console.log('cardSuit & prevCardSuit: ', (cardSuit.concat(prevCardSuit)));
                // OPTIMIZE THIS!!!!!!!!!!
                if ((cardSuit.concat(prevCardSuit)) === 'ds' || (cardSuit.concat(prevCardSuit)) === 'sd' || (cardSuit.concat(prevCardSuit)) === 'cd' || (cardSuit.concat(prevCardSuit)) === 'dc' || (cardSuit.concat(prevCardSuit)) === 'hc'|| (cardSuit.concat(prevCardSuit)) === 'ch') {
                    console.log('in here')
                    correctSuit = true;
                }
                // Instead of the following, change where the cards are located in the store
                if (prevCardValue < cardValue && correctSuit === true) {
                    this.props.playToPlay(this.state.selectedCards.id, cardId);
                }
            }
            this.state.selectedCards = null;
        } else {
            if (!card) return;
            this.state.selectedCards = {id: cardId, value: card};
        }
    }

    render() {
        console.log('rendering')
        const cards = this.props.cards;
        return (
            <div id='board'>
                    <div className='cardLocations homeCards' id='0'>{cards[0].length ? <p>{cards[0][0]}</p> : null } </div>
                    <div className='cardLocations homeCards' id='1'>{cards[1].length ? <p>{cards[1][0]}</p> : null } </div>
                    <div className='cardLocations homeCards' id='2'>{cards[2].length ? <p>{cards[2][0]}</p> : null } </div>
                    <div className='cardLocations homeCards' id='3'>{cards[3].length ? <p>{cards[3][0]}</p> : null } </div>

                    <div className='cardLocations stockCards' id='4'></div>
                    <div className='cardLocations stockCards' id='5'>{cards[4].length ? <p>{cards[4][0]}</p> : null }</div>

                    <div className = 'playCards'>
                        <div className='cardLocations' id='6' onClick={() => {this.selectPlayCards(cards[6][0], 6)}}>{cards.length ? <p>{cards[6][0]}</p> : null } </div>
                        <div className='cardLocations' id='7' onClick={() => {this.selectPlayCards(cards[7][0], 7)}}>{cards.length ? <p>{cards[7][0]}</p> : null } </div>
                        <div className='cardLocations' id='8' onClick={() => {this.selectPlayCards(cards[8][0], 8)}}>{cards.length ? <p>{cards[8][0]}</p> : null } </div>
                        <div className='cardLocations' id='9' onClick={() => {this.selectPlayCards(cards[9][0], 9)}}>{cards.length ? <p>{cards[9][0]}</p> : null } </div>
                        <div className='cardLocations' id='10' onClick={() => {this.selectPlayCards(cards[10][0], 10)}}>{cards.length ? <p>{cards[10][0]}</p> : null } </div>
                        <div className='cardLocations' id='11' onClick={() => {this.selectPlayCards(cards[11][0], 11)}}>{cards.length ? <p>{cards[11][0]}</p> : null } </div>
                        <div className='cardLocations' id='12' onClick={() => {this.selectPlayCards(cards[12][0], 12)}}>{cards.length ? <p>{cards[12][0]}</p> : null } </div>
                    </div>
            </div>
        );
    }
}



export default connect(
  (state) => {
    return {
      cards: state.game.cards
    }
  }, 
  (dispatch) => {
      return {
        playToPlay: (firstPlayId, secondPlayId) => {
            dispatch(playToPlay(firstPlayId, secondPlayId));
        }
      }
  }
)(Home)