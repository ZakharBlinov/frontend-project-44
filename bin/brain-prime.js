#!/usr/bin/env node 
 
import readlineSync from 'readline-sync'; 

const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const PlayPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
    let correctAnswersCount = 0;
  
    while (correctAnswersCount < 3) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
  
      const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  
      if (userAnswer !== correctAnswer) {
        console.log(`${userAnswer}' is wrong answer Correct answer was '${correctAnswer}`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
  
      console.log('Correct!');
      correctAnswersCount += 1;
    }
  
    console.log(`Congratulations, ${name} !`);
  };
  
  PlayPrimeGame();
