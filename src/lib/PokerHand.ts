import CardClass from './CardClass';

interface Poker {
    [key: string]: number;
}

class PokerHand {
    constructor(private cards: CardClass[]) {}

    getOutCome() {
        const map = this.cards.reduce<Poker>((acc, card) => {
            if (acc[card.rank]) {
                acc[card.rank]++;
            } else {
                acc[card.rank] = 1;
            }
            return acc;
        }, {});

        const repeats = Object.values(map);

        let pairs = 0;
        let threes = 0;
        let fours = 0;

        for (const repeat of repeats) {
            if(repeat === 2) {
                pairs++;
            }
            if(repeat === 3) {
                threes++;
            }
            if(repeat === 4) {
                fours++;
            }
        }

        const firstSuit = this.cards[0].suit;
        const isFlush = this.cards.every((card) => card.suit === firstSuit);


        if (fours > 0) {
            return 'Four of a Kind!';
        } else if (threes > 0 && pairs > 0) {
            return 'Full House!';
        } else if (isFlush) {
            return 'Flush!';
        } else if (threes > 0) {
            return 'Three of a Kind!';
        } else if (pairs === 2) {
            return 'Two Pairs!';
        } else if (pairs === 1) {
            return 'One Pair!';
        }
        return 'High Card!';
    }
}

export default PokerHand;
