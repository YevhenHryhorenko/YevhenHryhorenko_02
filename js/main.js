let firstNum = +prompt("Enter first number: "),
	secondNum = +prompt("Enter second number: "),
	division = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;

if (secondNum == 0) {
	division = "You cannot divide by 0";
}

alert(`
${firstNum} + ${secondNum} = ${firstNum + secondNum}
${firstNum} - ${secondNum} = ${firstNum - secondNum}
${firstNum} * ${secondNum} = ${firstNum * secondNum}
${division}
`);
