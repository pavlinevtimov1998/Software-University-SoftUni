function vowelsSum (input){

    let text = input[0];
    let sum = 0;
    let text1 = text.length

    for (let i = 0; i < text1; i++) {
        switch (text.charAt(i)){
            case "a": sum += 1;
            break;
            case "e": sum += 2 ;
            break;
            case "i": sum += 3;
            break;
            case "o": sum += 4 ;
            break;
            case "u": sum += 5;
            break;
        }
    } 

    console.log(sum)
   

}
vowelsSum(["bamboo "])