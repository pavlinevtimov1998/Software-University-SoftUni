function cent (input){

    let money = Number(input[0]);
    let count = 0;
    money = Math.floor(money * 100);

    while (money > 0){
        if (money >= 200){
            count++;
            money -= 200;
        } else if (money >= 100){
            count++;
            money -= 100;
        } else if (money >= 50){
            count++;
            money -= 50;
        } else if (money >= 20){
            count++;
            money -= 20;
        } else if (money >= 10){
            count++;
            money -= 10;
        } else if (money >= 5){
            count++;
            money -= 5;
        } else if (money >= 2){
            count++;
            money -= 2;
        } else if (money >= 1){
            count++;
            money -= 1;
        } 
    }

    console.log(count);




} cent (["0.56"])