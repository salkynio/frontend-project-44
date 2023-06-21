import basicOfGames from '../index.js';
import { getRandomRange } from '../random.js';

const progressionGame = () => {
  const purposeOfprogressionGame = 'What number is missing in the progression?';
  const taskForProgressionGame = () => {
    const random = getRandomRange(5, 10);
    const first = Math.floor(Math.random() * 10) + 2;
    const step = Math.floor(Math.random() * 5);

    const progression = [];

    for (let i = first; i < random - 1; i += 1) {
      progression.push(i);
    }

    const lastIndex = progression.length - 1;
    const randomNumFromArr = getRandomRange(0, lastIndex);
    const removedNumber = progression[randomNumFromArr];
    progression[randomNumFromArr] = '..';

    const question = progression.join(' ');
    const result = removedNumber.toString();
    return [question, result];
  };
  basicOfGames(purposeOfprogressionGame, taskForProgressionGame);
};
export default progressionGame;
