#! /usr/bin/env node
import inquirer from 'inquirer';
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number 1 to 10: ",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("You WON! you guessed the right number");
}
else {
    console.log("You LOSE! you guessed the wrong number");
}
