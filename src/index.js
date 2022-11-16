import readlineSync, { question } from 'readline-sync';
export function winOrLoss(iter, functionOfGame, answer, questionForUser, userName) {
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (iter === 2) {
        return console.log(`Congratulations, ${userName}!`);
    };

    if (answer === userAnswer) {
        console.log('Correct!');
        functionOfGame(iter += 1);
    } else if (answer != userAnswer) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
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
        if (!found) { numbers[numbers.length] = randomNumbers; };
    }
    return numbers;
}

export function greet(gameConditions) {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log(gameConditions);
return userName;
}