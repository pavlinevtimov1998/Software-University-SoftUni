function building (input){

    let a = Number(input[0]);
    let b = Number(input[1]);

    for(let i = a;i >= 1;i-- ){
        let string = "";
        for(let j = 0;j < b;j++){
            if (i === a){
                string += `L${i}${j} `;
            } else if (i % 2 === 0){
                string += `O${i}${j} `;
            } else {
                string += `A${i}${j} `
            }
        }
        console.log(string);
    }


} building (["9","5"])