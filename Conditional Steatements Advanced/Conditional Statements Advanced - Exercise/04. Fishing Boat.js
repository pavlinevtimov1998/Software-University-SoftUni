function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numbOfPeople = Number(input[2]);
    let price = 0;
    let discount = 0;

        switch (season) {
        case "Summer": price = 4200; break;
        case "Autumn": price = 4200; break;
        case "Spring": price = 3000; break;
        case "Winter": price = 2600; break;
    }
    if (numbOfPeople >= 1 && numbOfPeople <= 6) {
        discount = 10 / 100;
        price = price - (price * discount);
    } else if (numbOfPeople >= 7 && numbOfPeople <= 11) {
        discount = 15 / 100;
        price = price - (price * discount);
    } else if (numbOfPeople >= 12) {
        discount = (25 / 100);
        price = price - (price * discount);
    }
    if (numbOfPeople % 2 === 0 && season != "Autumn" && numbOfPeople !== 0) {
        discount = 5 / 100;
        price = price - (price * discount)
    }
     if (price <= budget) {
        price = Math.abs(price - budget);
        console.log(`Yes! You have ${price.toFixed(2)} leva left.`)
    } else {
        price = Math.abs(price - budget)
        console.log(`Not enough money! You need ${price.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"])