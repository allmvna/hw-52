import './App.css';
import Card from './Card';
import {Rank, Suit} from './type';

const App = () => {

  return (
      <>
          <div className="playingCards faceImages">
              <Card rank={Rank._3} suit={Suit.DIAMS}/>
              <Card rank={Rank._J} suit={Suit.HEARTS}/>
              <Card rank={Rank._A} suit={Suit.CLUBS}/>
              <Card rank={Rank._K} suit={Suit.SPADES}/>
          </div>
      </>
  );
};

export default App;
