export const arrOfRandomNumbers = () => {
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
}

export const winOrLoss = (iter = 0, answer, userAnswer,functionOfGames, userName) => {
    if (iter === 3) {
        return console.log(`Congratulations, ${userName}!`);
    };
    
    if (answer === userAnswer) {
        console.log('Correct!')
        functionOfGames(iter += 1);
    } else if (answer != userAnswer) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
    }
}