import getRandom from '../random.js';
import basicOfGames from '../index.js';

const evenGame = () => {
  const purposeOfEvenGame = 'Answer "yes" if the number is even , otherwise answer "no."';

  const taskForEvenGame = () => {
    const randomNumber = getRandom(0, 100);
    console.log(randomNumber);

    const isEven = (number) => number % 2 === 0;

    const question = randomNumber;
    const result = isEven(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };

  basicOfGames(purposeOfEvenGame, taskForEvenGame);
};
export default evenGame;
