function invalidNumber(input) {

    let numb = Number(input[0]);


    if (numb > 200 || numb < 100 & numb != 0){
        console.log("invalid");
    }

}
invalidNumber(["-1"])