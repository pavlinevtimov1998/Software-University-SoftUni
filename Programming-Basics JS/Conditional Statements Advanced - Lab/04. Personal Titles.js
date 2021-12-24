function personalTitles (input){

    let age = Number(input[0]);
    let gen = input[1];

    if (gen == 'f'){
        if(age>=16){
            console.log("Ms.");
        }else{
            console.log("Miss");
        }
    } else if(age>=16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }



}
personalTitles(["25","f"])