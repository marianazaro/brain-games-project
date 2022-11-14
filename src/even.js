import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${userName}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (num) => {
    const result = num % 2 === 0 ? 'yes' : 'no';
    return result; 
};

const playGame = (iter = 0) => {
    const randomNum = Math.round(Math.random() * 10);
    console.log(`Question: ${randomNum}`);

    const userResponse = readlineSync.question('Your answer: ');
    const answer = isEven(randomNum);

    if (iter === 2) {
        return console.log(`Congratulations, ${userName}!`);
    };
    
    if (answer === userResponse) {
        console.log('Correct!')
        playGame(iter += 1);
    } else if (answer != userResponse) {
        return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
    }
};
export {playGame};