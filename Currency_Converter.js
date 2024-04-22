#! /usr/bin/env node
// Currency Converter Program
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    PKR: 278,
    INR: 83.36,
    EUR: 0.94,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select from Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR"],
    },
    {
        name: "to",
        message: "Select to Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR"],
    },
    {
        name: "amount",
        message: "Enter the Amount: ",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted ${user_answer.amount} ${user_answer.from} into : ${convertedAmount.toFixed()} ${user_answer.to}.`);
