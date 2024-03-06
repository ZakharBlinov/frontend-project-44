#!/usr/bin/env node

import driver from '../index.js';
import getRandomNumber from './random.js';

const getProgression = () => {
  const length = 7;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = [];
  let definableNumber;
  const start = getRandomNumber(0, 10);
  const diff = getRandomNumber(0, 10) + 1;
  for (let i = 1; i <= length; i += 1) {
    if (i === hiddenIndex + 1) {
      progression.push('..');
      definableNumber = start + (i - 1) * diff;
    } else {
      const number = start + (i - 1) * diff;
      progression.push(number);
    }
  }
  const progression2 = progression.join(' ');
  return { progression2, definableNumber };
};
const question = 'What number is missing in the progression?';
const playGame = () => {
  const prog = getProgression(0, 10);
  const progression = prog.progression2;
  const questionTwo = `${progression}`;
  const rightAnswer = prog.definableNumber.toString();
  return { rightAnswer, questionTwo };
};
const playProgGame = () => driver(playGame, question);
export default playProgGame;
