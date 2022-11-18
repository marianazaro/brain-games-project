// eslint-disable-next-line import/extensions
import { winOrLoss, greet } from '../src/index.js';

const gameConditions = 'What number is missing in the progression?';
const userName = greet(gameConditions);

const progression = (num) => {
  const length = 10;
  const arrProgression = [];
  const step = Math.round(Math.random() * 20);

  for (let i = num; arrProgression.length < length; i += step) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const playGameProgression = (iter = 0) => {
  const index = Math.round(Math.random() * 9);
  const startOfProgression = Math.round(Math.random() * 20);
  const arrOfProgression = progression(startOfProgression);
  const answer = String(arrOfProgression[index]);
  const arrForQuestion = arrOfProgression;
  arrForQuestion.splice(index, 1, '..');
  const [a, b, c, d, e, f, g, h, j, o] = arrForQuestion;
  const questionForUser = `${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${j} ${o}`;

  const game = winOrLoss(iter, playGameProgression, answer, questionForUser, userName);
  return game;
};
// eslint-disable-next-line import/prefer-default-export
export { playGameProgression };
