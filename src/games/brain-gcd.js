#!/usr/bin/env node

import driver from '../index.js';
import getRandomNumber from './random.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const question = 'Find the greatest common divisor of given numbers.';
const playGame = () => {
  const randomNamber1 = getRandomNumber(0, 10);
  const randomNamber2 = getRandomNumber(0, 10);
  const rightAnswer = gcd(randomNamber1, randomNamber2).toString();
  const questionTwo = `${randomNamber1} ${randomNamber2}`;
  return { rightAnswer, questionTwo };
};
const playGcdGame = () => driver(playGame, question);
export default playGcdGame;
