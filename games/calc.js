import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${userName}!`)

console.log('What is the result of the expression?');

const arrOfRandomNumbers = () => {
    const numbers = [];
    while (numbers.length < 10) {
        const randomNumbers = Math.ceil(Math.random() * 100)
        let found = false;
        for (let i = 0; i < numbers.length; i += 1) {
            if (numbers[i] === randomNumbers) {
                found = true;
                break;
            }
        }
        if (!found) {numbers[numbers.length]=randomNumbers};
    }
    return numbers;
};

const playGameCalc = (iter = 0) => {
    const index = () => Math.round(Math.random() * 10);
    const mathOperations = ['+', '-', '*'];
    const numbers = arrOfRandomNumbers();
    const num1 = numbers[index()];
    const num2 = numbers[index()];
    const indexOfOperations = () => index() <= 2 ? index : indexOfOperations;
    const operation = mathOperations[indexOfOperations]; 
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const answer = num1 + operation + num2;

    const userAnswer = readlineSync.question('Your answer: ');

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
export {playGameCalc};