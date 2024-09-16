import './App.css';
import {useState} from 'react';
import CardDeck from './lib/CardDeck';
import CardClass from './lib/CardClass';
import Card from './Card';
import PokerHand from './lib/PokerHand';

const App = () => {
    const [cards, setCards] = useState<CardClass[]>([]);


    const dealCards = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
    };


    let outcome = '';
    if(cards.length > 0) {
        const hand = new PokerHand(cards);
        outcome = hand.getOutCome();

    }

  return (
      <>
          <div className="playingCards faceImages">
              {cards.map ((card, index) => (
                  <Card key={index} suit = {card.suit} rank = {card.rank} />
              ))}

              <button onClick={dealCards} type='button'>Раздать карты</button>
              <strong>Outcome: </strong>{outcome}
          </div>
      </>
  );
};

export default App;
