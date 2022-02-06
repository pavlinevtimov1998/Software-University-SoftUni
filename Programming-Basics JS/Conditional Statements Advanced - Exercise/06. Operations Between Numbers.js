function operationsBetweenNumbers(input) {

    let numb1 = Number(input[0]);
    let numb2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let per = "";

    switch (operator) {
        case "+":
            result = numb1 + numb2;
            if (result % 2 === 0) {
                per = "even";
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            } else {
                per = "odd"
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            }
            break;
        case "-":
            result = numb1 - numb2;
            if (result % 2 === 0) {
                per = "even";
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            } else {
                per = "odd"
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            }
            break;
        case "*":
            result = numb1 * numb2;
            if (result % 2 === 0) {
                per = "even";
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            } else {
                per = "odd"
                console.log(`${numb1} ${operator} ${numb2} = ${result} - ${per}`)
            }
            break;
        case "/":
            if (numb2 !== 0) {
                result = numb1 / numb2;
                result = result.toFixed(2);
                console.log(`${numb1} ${operator} ${numb2} = ${result}`)
            } else {
                console.log(`Cannot divide ${numb1} by zero`)
            }
            break;
        case "%":
            if (numb2 !== 0) {
                result = numb1 % numb2;
                console.log(`${numb1} ${operator} ${numb2} = ${result}`)
            } else {
                console.log(`Cannot divide ${numb1} by zero`)
            }
            break;
    }

}
operationsBetweenNumbers(["112",
"0",
"/"])