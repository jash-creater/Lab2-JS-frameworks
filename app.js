// Import functions from utilities.js
import { welcomeUser, convertCelsiusToFahrenheit, calculateFactorial, generateRandomPassword } from './utilities.js';

// Call functions
welcomeUser("Jashan", "Sharma");

let celsius = 25;
console.log(`${celsius}°C is equal to ${convertCelsiusToFahrenheit(celsius)}°F`);

let number = 5;
console.log(`Factorial of ${number} is ${calculateFactorial(number)}`);

console.log(`Generated Password: ${generateRandomPassword(10)}`);
