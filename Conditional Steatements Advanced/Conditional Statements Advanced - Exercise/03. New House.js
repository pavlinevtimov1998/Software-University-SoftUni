function newHome(input) {

    let fwower = input[0];
    let numb = Number(input[1]);
    let budget = Number(input[2]);
    let allPrice = 0;
    let priceForNarciss = 3;
    let priceForGladiolus = 2.50;

    switch (fwower) {
        case "Roses": allPrice = 5 * numb; break;
        case "Dahlias": allPrice = 3.80 * numb; break;
        case "Tulips": allPrice = 2.80 * numb; break;
        case "Narcissus": allPrice = priceForNarciss * numb; break;
        case "Gladiolus": allPrice = priceForGladiolus * numb; break;
    } if (fwower === "Roses" && numb > 80) {
        let discount = 0.10;
        allPrice = allPrice - (discount * allPrice);
    } else if (fwower === "Dahlias" && numb > 90) {
        discount = 0.15;
        allPrice = allPrice - (discount * allPrice);
    } else if (fwower === "Tulips" && numb > 80) {
        discount = 0.15;
        allPrice = allPrice - (discount * allPrice);
    }  else if (fwower === "Narcissus" && numb < 120){
        priceForNarciss = priceForNarciss + (priceForNarciss * 0.15)
        allPrice = priceForNarciss * numb;
    } else if (fwower === "Gladiolus" && numb < 80){
        priceForGladiolus = priceForGladiolus + (priceForGladiolus * 0.20);
        allPrice = priceForGladiolus* numb;
    }
    if (allPrice > budget){
        console.log(`Not enough money, you need ${Math.abs(allPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${numb} ${fwower} and ${allPrice = Math.abs(allPrice - budget).toFixed(2)} leva left.`);
    }
}
newHome(["Gladiolus", "119", "360"])