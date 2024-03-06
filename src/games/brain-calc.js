#!/usr/bin/env node

import playGame from '../index.js';
import getRandomNumber from './random.js';

const calculation = (randomNamber1, randomNamber2, operation) => {
  switch (operation) {
    case '+':
      return randomNamber1 + randomNamber2;
    case '-':
      return randomNamber1 - randomNamber2;
    case '*':
      return randomNamber1 * randomNamber2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};
const question = 'What is the result of the expression?';
const runGame = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, 3);
  const randomNamber1 = getRandomNumber(0, 10);
  const randomNamber2 = getRandomNumber(0, 10);
  const operation = operations[operationIndex];
  const questionTwo = `${randomNamber1} ${operation} ${randomNamber2}`;
  const rightAnswer = calculation(randomNamber1, randomNamber2, operation).toString();
  return { rightAnswer, questionTwo };
};
const playCalcGame = () => playGame(runGame, question);

export default playCalcGame;