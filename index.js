const chalk = require('chalk');

// Create an array of possible colors
const color = ['red', 'green', 'blue', 'magenta', 'cyan', 'gray'];
let names = ["Eric", "Jerome", "Loic", 'Cyril', 'Mustapha', 'Josselyn', 'Thibaud', 'Mickael', 'Cherif', 'Ludovic', 'Nasser'];

// arr.forEach((name, ) => console.log(name))

names.forEach(name => {

    // and get a random color name from the array
    // and call the function on it
    console.log(chalk[color[Math.floor(Math.random() * color.length)]](name))
})

// console.log(chalk.red('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.red('Hello world!'));