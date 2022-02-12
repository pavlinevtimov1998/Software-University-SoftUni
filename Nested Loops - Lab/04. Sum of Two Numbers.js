function sum(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNumb = Number(input[2]);
    let count = 0;
    let isFound = false;

    for (let i = start; i <= finish; i++) {
        if (isFound){
            break;
        }
        for (let j = start; j <= finish; j++) {
            count++;
            if (i + j === magicNumb) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumb})`);
                isFound = true;
                break;
            } 
        }
    }
    if (isFound === false){
        console.log(`${count} combinations - neither equals ${magicNumb}`);
    }


}sum (["88",
"888",
"1000"])