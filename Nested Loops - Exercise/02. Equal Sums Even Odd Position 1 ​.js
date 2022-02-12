function oddEndEven(input) {

    let startNumb = Number(input[0]);
    let endNumb = Number(input[1]);
    let result = "";

    for (let i = startNumb; i <= endNumb; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let string = i + "";
        for (let index = 0; index < string.length; index++) {
            if (index % 2 === 0) {
                evenSum += Number(string[index]);
            } else {
                oddSum += Number(string[index]);
            }
        }
        if (evenSum === oddSum) {
            result += string + " ";
        }
    }
    console.log(result);



} oddEndEven(["123456",
    "124000"])