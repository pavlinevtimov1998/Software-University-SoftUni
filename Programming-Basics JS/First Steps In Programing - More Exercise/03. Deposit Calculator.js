function calcDeposit(input){

    let a = Number(input[0]);

    let b = Number(input[1]);

    let c = Number(input[2]);

    let sum = a + b * ((a * (c / 100)) / 12);

    console.log(sum)

}
calcDeposit(["2350", "6", "7"])