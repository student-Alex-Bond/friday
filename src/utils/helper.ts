import { CardType } from '../componets/PacksList/PackItem/pack-item-reducer';

export const getCard = (cards: CardType[]): CardType => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );
  // console.log('current card', cards[res.id + 1]);
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return cards[res.id + 1];
};
