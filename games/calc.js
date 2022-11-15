import readlineSync from 'readline-sync';
import {arrOfRandomNumbers} from '../src/functionForGames.js';
console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${userName}!`)

console.log('What is the result of the expression?');



const transformOperation = (operator, num1, num2) => {
    let result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    }
    return String(result);
};

const playGameCalc = (iter = 0) => {
    const mathOperations = ['+', '-', '*'];
    const numbers = arrOfRandomNumbers();
    const index1 = Math.round(Math.random() * 9);
    const index2 = Math.round(Math.random() * 9);
    const num1 = numbers[index1];
    const num2 = numbers[index2];
    const indexOfOperator = Math.floor(Math.random() * 3);
    const operator = mathOperations[indexOfOperator]; 
    const answer = transformOperation(operator, num1, num2);
    console.log(`Question: ${num1} ${operator} ${num2}`);
    
    const userAnswer = readlineSync.question('Your answer: ');
    if (iter === 2) {
        return console.log(`Congratulations, ${userName}!`);
    };
    
    if (answer === userAnswer) {
        console.log('Correct!')
        playGameCalc(iter += 1);
    } else if (answer != userAnswer) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
    }
};
export {playGameCalc};