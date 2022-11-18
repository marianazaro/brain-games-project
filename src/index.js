// eslint-disable-next-line no-unused-vars
import readlineSync, { question } from 'readline-sync';

// eslint-disable-next-line consistent-return
export function winOrLoss(iter, functionOfGame, answer, questionForUser, userName) {
  // eslint-disable-next-line no-console
  console.log(`Question: ${questionForUser}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (iter === 2 && userAnswer === answer) {
    // eslint-disable-next-line no-console
    return console.log(`Congratulations, ${userName}!`);
  } if (iter === 2 && userAnswer !== answer) {
    // eslint-disable-next-line no-console
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
  }

  if (answer === userAnswer) {
    // eslint-disable-next-line no-console
    console.log('Correct!');
    // eslint-disable-next-line no-param-reassign
    functionOfGame(iter += 1);
  // eslint-disable-next-line eqeqeq
  } else if (answer != userAnswer) {
    // eslint-disable-next-line no-console
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
  }
}

export function arrOfRandomNumbers() {
  const numbers = [];
  while (numbers.length < 10) {
    const randomNumbers = Math.ceil(Math.random() * 100);
    let found = false;
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === randomNumbers) {
        found = true;
        break;
      }
    }
    if (!found) { numbers[numbers.length] = randomNumbers; }
  }
  return numbers;
}

export function greet(gameConditions) {
// eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
  // eslint-disable-next-line no-console
  console.log(gameConditions);
  return userName;
}
