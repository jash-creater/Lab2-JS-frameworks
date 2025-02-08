export function welcomeUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
export function calculateFactorial(num) {
    if (num === 0 || num === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
export function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
