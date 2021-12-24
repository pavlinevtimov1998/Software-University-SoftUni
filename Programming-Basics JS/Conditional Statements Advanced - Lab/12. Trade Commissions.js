function tradeCommissions(input){

    let town = input[0];
    let numb = Number(input[1]);
    let commission = 0;

    if (town === "Sofia"){
        if (numb >= 0 && numb <= 500){
            commission = 0.05;
        } else if (numb > 500 && numb <= 1000){
            commission = 0.07;
        } else if (numb > 1000 && numb <= 10000){
            commission = 0.08;
        } else if (numb > 10000){
            commission = 0.12;
        }
    }
    if (town === "Varna"){
        if (numb >= 0 && numb <= 500){
            commission = 0.045;
        } else if (numb > 500 && numb <= 1000){
            commission = 0.075;
        } else if (numb > 1000 && numb <= 10000){
            commission = 0.10;
        } else if (numb > 10000){
            commission = 0.13;
        }
    }
    if (town === "Plovdiv"){
        if (numb >= 0 && numb <= 500){
            commission = 0.055;
        } else if (numb > 500 && numb <= 1000){
            commission = 0.08;
        } else if (numb > 1000 && numb <= 10000){
            commission = 0.12;
        } else if (numb > 10000){
            commission = 0.145;
        }
    }
    if (commission > 0){
        commission = numb * commission;
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}
tradeCommissions(["Sofia","1500"])