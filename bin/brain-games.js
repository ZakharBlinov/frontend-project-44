#!/usr/bin/env node
/* eslint-disable import/extensions */

import greetUser from '../src/cli.js';

import playCalculatorGame from '../src/games/brain-calc.js';

import playGCDGame from '../src/games/brain-gcd.js';

import PlayPrimeGame from '../src/games/brain-prime.js';

import playProgressionGame from '../src/games/brain-progression.js';

import playEvenGame from '../src/games/brain-even.js';

greetUser();

playCalculatorGame();

playGCDGame();

PlayPrimeGame();

playProgressionGame();

playEvenGame();
