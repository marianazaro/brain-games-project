import readlineSync from 'readline-sync';
import {arrOfRandomNumbers} from '../src/functionForGames.js'
console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${userName}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (num) => {
    const result = num % 2 === 0 ? 'yes' : 'no';
    return result; 
};

const playGameEven = (iter = 0) => {
    const numbers = arrOfRandomNumbers();
    const randomNum = numbers[Math.round(Math.random() * 10)];
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const answer = isEven(randomNum);

    if (iter === 2) {
        return console.log(`Congratulations, ${userName}!`);
    };
    
    if (answer === userAnswer) {
        console.log('Correct!')
        playGameEven(iter += 1);
    } else if (answer != userAnswer) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
    }
};
export {playGameEven};