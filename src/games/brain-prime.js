#!/usr/bin/env node

import driver from '../index.js';
import getRandomNumber from './random.js';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const playGame = () => {
  const randomNumber = getRandomNumber(0, 10);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const questionTwo = `${randomNumber}`;
  return { rightAnswer, questionTwo };
};
const playPrimeGame = () => driver(playGame, question);
export default playPrimeGame;
