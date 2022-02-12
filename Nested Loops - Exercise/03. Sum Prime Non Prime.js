function primeNonPrime (input){

    let index = 0;
    let command = (input[index]);
    index++;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while(command !== "stop"){
        let numb = Number(command);
        if(numb < 0){
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (numb === 1){
            sumPrime += numb;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for(let i = 2; i < numb; i++){
            if(numb % i === 0){
                isPrime = false;
            }
        }
        if (isPrime){
            sumPrime += numb;
        }else {
            sumNonPrime += numb;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

} primeNonPrime (["3",
"9",
"0",
"7",
"19",
"4",
"stop"])