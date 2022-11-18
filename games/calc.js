// eslint-disable-next-line import/extensions
import { winOrLoss, arrOfRandomNumbers, greet } from '../src/index.js';

const gameConditions = 'What is the result of the expression?';
const userName = greet(gameConditions);

function transformOperation(operator, num1, num2) {
  let result = 0;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  return String(result);
}

function playGameCalc(iter = 0) {
  const mathOperations = ['+', '-', '*'];
  const numbers = arrOfRandomNumbers();
  const index1 = Math.round(Math.random() * 9);
  const index2 = Math.round(Math.random() * 9);
  const num1 = numbers[index1];
  const num2 = numbers[index2];
  const indexOfOperator = Math.floor(Math.random() * 3);
  const operator = mathOperations[indexOfOperator];
  const answer = transformOperation(operator, num1, num2);
  const questionForUser = `${num1} ${operator} ${num2}`;

  const game = winOrLoss(iter, playGameCalc, answer, questionForUser, userName);
  return game;
}

// eslint-disable-next-line import/prefer-default-export
export { playGameCalc };
