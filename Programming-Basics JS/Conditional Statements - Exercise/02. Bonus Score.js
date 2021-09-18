function bonusScore (input){

    let numb = Number(input[0]);
    let bonus;

    if (numb <= 100){
        bonus = 5;
    } else if (numb > 1000){
        bonus = numb * 0.10;
    } else {
        bonus = (numb * 0.20);
    }

    if (numb % 2 === 0){
        bonus = bonus + 1;
    } else if (numb % 10 === 5){
        bonus = bonus + 2;
    }
    


    console.log (bonus)
    console.log (numb + bonus)
    


}
bonusScore (["15875"])