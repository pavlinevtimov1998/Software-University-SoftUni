function basketballEquipment(input){

    let yearTax = Number(input[0]);
    let baskShoes = yearTax - (yearTax * (40 / 100));
    let baskTshirt = baskShoes - (baskShoes * (20 / 100));
    let baskBall = baskTshirt * (25 / 100);
    let baskAcess = baskBall * (20 / 100);

    let priceForEquipment = yearTax + baskShoes + baskTshirt + baskBall + baskAcess;
    console.log(priceForEquipment)
}
basketballEquipment(["365"])