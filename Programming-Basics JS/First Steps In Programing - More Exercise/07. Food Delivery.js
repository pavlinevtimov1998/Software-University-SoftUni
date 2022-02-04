function foodDelivery(input){

    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let sumOfChiken = chikenMenu * 10.35;
    let sumOfFish = fishMenu * 12.40;
    let sumOfVegetMenu = vegetarianMenu * 8.15;
    let result = sumOfChiken + sumOfFish + sumOfVegetMenu;
    let desert = result * (20 / 100);
    let priceForDelivery = 2.50;
    let allPrice = result + desert + priceForDelivery;

    console.log(allPrice)
}
foodDelivery(["9", "2", "6"])