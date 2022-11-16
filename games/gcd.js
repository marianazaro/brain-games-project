import {greeting, arrOfRandomNumbers, winOrLoss} from '../src/index.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';
const userName = greeting(gameConditions);

function gcd(num1, num2) {
    const minNum = num1 < num2 ? num1 : num2;
    
    for (let i = minNum; i >= 2; i -= 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            return String(i);
        }
    }
    return String(1);
};

const playGameGcd = (iter = 0) => {
    const numbers = arrOfRandomNumbers();
    const index1 = Math.round(Math.random() * 9);
    const index2 = Math.round(Math.random() * 9);
    const num1 = numbers[index1];
    const num2 = numbers[index2];
    const answer = gcd(num1, num2);
    const questionForUser = `${num1} ${num2}`;

    const game = winOrLoss(iter, playGameGcd, answer, questionForUser, userName);
    return game;
};
export {playGameGcd};