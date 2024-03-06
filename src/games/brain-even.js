#!/usr/bin/env node

import driver from '../index.js';
import getRandomNumber from './random.js';

const isEven = (num) => num % 2 === 0;
const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const playGame = () => {
  const questionTwo = getRandomNumber(0, 10);
  const rightAnswer = isEven(questionTwo) ? 'yes' : 'no';
  return { rightAnswer, questionTwo };
};
const playEvenGame = () => driver(playGame, question);
export default playEvenGame;
