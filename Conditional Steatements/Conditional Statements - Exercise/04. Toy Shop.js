function toyShop (input){

    let priceForExcursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minons = Number(input[4]);
    let truck = Number(input[5]);

    let allSum = puzzle * 2.60 + dolls * 3 + bears * 4.10 + 
    minons * 8.20 + truck * 2;
    let numbOfToys = puzzle + dolls + bears + minons + truck;
    
    if (numbOfToys >= 50){
        allSum = allSum * 0.75;
      }

      allSum = allSum * 0.90;
      let Diff = Math.abs (allSum - priceForExcursion)
    if ( allSum >= priceForExcursion){
        console.log(`Yes! ${Diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Diff.toFixed(2)} lv needed.`)
    }

}
toyShop (["320","8","2","5","5","1"])