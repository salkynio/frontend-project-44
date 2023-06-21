import basicOfGames from '../index.js';
import getRandom from '../random.js';

const primeGame = () => {
  const purposeOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskforPrimeGame = () => {
    const randomNumber = getRandom(100);
    const question = randomNumber;

    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % 2 === 0) {
          return false;
        }
      }
      return num !== 1;
    };
    const result = isPrime(randomNumber) ? 'yes' : 'no';
    return [question, result];
  };
  basicOfGames(purposeOfPrimeGame, taskforPrimeGame);
};
export default primeGame;
