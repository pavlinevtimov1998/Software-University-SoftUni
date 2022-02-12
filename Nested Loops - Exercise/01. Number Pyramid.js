function pyramid (input){

    let numb = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let r = 1; r <= numb; r++){
        for(let c = 1; c <= r; c++){
            if(current > numb){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }







} pyramid (["7"])