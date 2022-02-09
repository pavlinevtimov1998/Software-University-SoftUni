function cleverLily (input){

    let yearsOfLily = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let priceForToy = Number(input[2]);

    let toys = 0;
    let money = 0;
    let saveMoney = 10;

    for(let i = 1; i <= yearsOfLily; i++){
         if(i % 2 !== 0){
            toys++;
        } else {
            money+=saveMoney;
            saveMoney+=10;
            money-=1;
        }
    }

    money += toys * priceForToy;
    let diff = Math.abs(money - laundryPrice);

    if(money >= laundryPrice){
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${(diff.toFixed(2))}`)
    }


}
cleverLily (["21","1570.98","3"])