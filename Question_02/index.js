import { checkPrime } from './math.js';
const numbers = [0, 1, 2, 3, 4, 5, 16, 17, 19, 20];

numbers.forEach(num => {
  console.log(`${num} is prime? → ${checkPrime(num)}`);
});
