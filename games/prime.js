// eslint-disable-next-line import/extensions
import { greet, arrOfRandomNumbers, winOrLoss } from '../src/index.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const userName = greet(gameConditions);

const isPrime = (num) => {
  let result = '';
  let iter = 0;

  if (num === 1) {
    result = 'no';
  }

  for (let divisor = 2; divisor <= num; divisor += 1) {
    // eslint-disable-next-line no-unused-expressions
    num % divisor === 0 ? iter += 1 : iter += 0;
  }

  result = iter === 1 ? 'yes' : 'no';
  return result;
};

const playGamePrime = (iter = 0) => {
  const numbers = arrOfRandomNumbers();
  const randomNum = numbers[Math.round(Math.random() * 9)];
  const answer = isPrime(randomNum);

  const game = winOrLoss(iter, playGamePrime, answer, randomNum, userName);
  return game;
};
// eslint-disable-next-line import/prefer-default-export
export { playGamePrime };
