#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: chalk.blueBright("Guess a number 1 to 10: "),
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log(chalk.greenBright("You WON! you guessed the right number"));
}
else {
    console.log(chalk.redBright("You LOSE! you guessed the wrong number"));
}
