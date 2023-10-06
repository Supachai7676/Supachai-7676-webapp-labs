import inquirer from "inquirer";

var questions = [
  {
    type: "input",
    name: "operator",
    message: "add | subtract",
  },
];

const args = process.argv.slice(2);

const operand1 = parseFloat(args[0]);
const operand2 = parseFloat(args[1]);

if (isNaN(operand1) || isNaN(operand2) || args.length !== 2) {
  console.error("Please enter 2 numbers");
  process.exit(1);
}
function calculator() {
  inquirer.prompt(questions).then((answers) => {
    const input = answers.operator;
    const add = operand1 + operand2;
    const subtract = operand1 - operand2;
    if (input === "add") {
      console.log(`${operand1} + ${operand2} = ${add}`);
    } else if (input === "subtract") {
      console.log(`${operand1} - ${operand2} = ${subtract}`);
    } else {
      console.log("Unknown operator");
      calculator();
    }
  });
}

calculator();
