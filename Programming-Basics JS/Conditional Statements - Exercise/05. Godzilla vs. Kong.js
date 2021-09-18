function godzillaVsKong(input) {

    let priceForMoovie = Number(input[0]);
    let statists = Number(input[1]);
    let priceForSuit = Number(input[2]);

    let decor = priceForMoovie * 0.10;
    let sumSuits = statists * priceForSuit;

    statists > 150 ? sumSuits *= 0.90 : sumSuits;

    let decSuits = (decor + sumSuits).toFixed(2);

    if (decSuits > priceForMoovie) {
        priceForMoovie = Math.abs(priceForMoovie - decSuits)
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${priceForMoovie.toFixed(2)} leva more.`)
    } else {
        priceForMoovie = Math.abs(priceForMoovie - decSuits)
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${priceForMoovie.toFixed(2)} leva left.`)
    }


}
godzillaVsKong(["15437.62", "186", "57.99"])