<<<<<<< HEAD
import inquirer from 'inquirer';

var questions =[{
    type: 'input', 
    name: 'operand',
    message: 'Operands:'
}];

inquirer.prompt(questions).then(answers => {
    const input = answers.operand;
    const operands = input.split(' ')
    const operand1 = parseFloat(operands[0])
    const operand2 = parseFloat(operands[1])
    const sum = operand1 + operand2
    console.log(`operand are ${operand1} ${operand2}`)
    console.log(`${operand1} + ${operand2} = ${sum}`)
=======
import inquirer from 'inquirer';

var questions =[{
    type: 'input', 
    name: 'operand',
    message: 'Operands:'
}];

inquirer.prompt(questions).then(answers => {
    const input = answers.operand;
    const operands = input.split(' ')
    const operand1 = parseFloat(operands[0])
    const operand2 = parseFloat(operands[1])
    const sum = operand1 + operand2
    console.log(`operand are ${operand1} ${operand2}`)
    console.log(`${operand1} + ${operand2} = ${sum}`)
>>>>>>> 7609c1bad7b74476eeb19d38fda255d833d675d4
});