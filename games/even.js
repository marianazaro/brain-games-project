import { greet, arrOfRandomNumbers, winOrLoss } from '../src/index.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no"';
const userName = greet(gameConditions);

const isEven = (num) => {
    const result = num % 2 === 0 ? 'yes' : 'no';
    return result; 
};

const playGameEven = (iter = 0) => {
    const numbers = arrOfRandomNumbers();
    const randomNum = numbers[Math.round(Math.random() * 9)];
    const answer = isEven(randomNum);

    const game = winOrLoss(iter, playGameEven, answer, randomNum, userName);
    return game;
};
export {playGameEven};