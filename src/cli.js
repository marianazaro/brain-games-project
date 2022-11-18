import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
// eslint-disable-next-line import/prefer-default-export
export { greeting };
