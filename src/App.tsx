import './App.css';
import {useState} from 'react';
import CardDeck from './lib/CardDeck';
import CardClass from './lib/CardClass';
import Card from './Card';

const App = () => {
    const [cards, setCards] = useState<CardClass[]>([]);


    const dealCards = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
    };


  return (
      <>
          <div className="playingCards faceImages">
              {cards.map ((card, index) => (
                  <Card key={index} suit = {card.suit} rank = {card.rank} />
              ))}

              <button onClick={dealCards} type='button'>Раздать карты</button>
          </div>
      </>
  );
};

export default App;
