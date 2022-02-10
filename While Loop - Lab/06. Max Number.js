function maxNumb(input) {

    let numb = input[0];
    let index = 1;

    let min = Number.MIN_SAFE_INTEGER

    while(numb !== "Stop"){
        let inputNumb = Number(numb);

        if (min < inputNumb){
            min = inputNumb;
        }
        numb = input[index];
        index++;
    }
    console.log(min);


} maxNumb(["100",
"99",
"80",
"70",
"Stop"])