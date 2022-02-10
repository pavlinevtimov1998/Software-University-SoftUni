function accountBalance(input) {

    let total = 0;
    let index = 0;
    let currentSum = input[index];

    while (currentSum !== "NoMoreMoney") {

        let inputNumber = Number(currentSum);

        if (inputNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += inputNumber;
        console.log(`Increase: ${inputNumber.toFixed(2)}`);
        index++;
        currentSum = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);



} accountBalance(["120",
"45.55",
"-150"])