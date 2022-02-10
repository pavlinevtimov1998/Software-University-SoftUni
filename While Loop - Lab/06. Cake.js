function cake (input){

    let length = Number (input[0]); 
    let width = Number (input[1]);
    let numb = length * width;
    let index = 2;
    let getting = input[index];
    index++;

    while (getting !== "STOP"){
        let get = Number(getting);

        numb -= get;

        getting = input[index];
        index++;

        if (numb < 0){
            console.log(`No more cake left! You need ${Math.abs(numb)} pieces more.`);
            break;
        }
    }

    if (numb >= 0) {
        console.log(`${numb} pieces are left.`);
    }





} cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])