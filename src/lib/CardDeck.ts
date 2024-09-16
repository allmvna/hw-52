import CardClass from './CardClass';
import {Rank, Suit} from "../type.ts";

class CardDeck {
    private cards: CardClass[];

    constructor() {
        Object.values(Suit).forEach(suit => {
            Object.values(Rank).forEach(rank => {
              const card = new CardClass(rank, suit);
              this.cards.push(card);
            });
        });
    }

    getCard () {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const [result] = this.cards.slice(randomIndex, 1);
        return result;
};

    getCards (howMany : number) {
        const resultCards: CardClass[] = [];
        for (let i = 0; i < howMany ; i++) {
            const card = this.getCard();
            resultCards.push(card);
        }
        return resultCards;
    }
}

     export default CardDeck;