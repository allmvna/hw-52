import React from 'react';
import {Rank, Suit} from './type';

interface Props {
    rank: Rank;
    suit: Suit;
}

const getSuitSymbols = (suit: Suit) => {
    switch (suit) {
        case Suit.CLUBS:
            return '♣';
        case Suit.DIAMS:
            return '♦';
        case Suit.HEARTS:
            return '♥';
        case Suit.SPADES:
            return '♠';
            default:
                throw new Error('invalid suit');
    }
};


const Card : React.FC <Props>= ({rank, suit}) => {
    const suitSymbols = getSuitSymbols(suit);
    const cardClasses = `card rank-${rank.toLowerCase()} ${suit}`;

    return (
        <div>
            <span className={cardClasses}>
                 <span className="rank">{rank}</span>
                <span className="suit">{suitSymbols}</span>
            </span>
        </div>
    );
};

export default Card;