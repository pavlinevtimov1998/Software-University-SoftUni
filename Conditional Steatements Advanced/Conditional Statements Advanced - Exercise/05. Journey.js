function jurney(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let price = 0;
    let hotelCamp = "";

    switch (season) {
        case "summer":
            if (budget <= 100) {
                destination = "Bulgaria";
                price = budget * 0.30;
                hotelCamp = "Camp";
            } else if (budget <= 1000) {
                destination = "Balkans";
                price = budget * 0.40;
                hotelCamp = "Camp";
            } else if (budget > 1000) {
                destination = "Europe";
                price = budget * 0.90;
                hotelCamp = "Hotel";
            }
            break;
        case "winter":
            if (budget <= 100) {
                destination = "Bulgaria";
                price = budget * 0.70;
                hotelCamp = "Hotel";
            } else if (budget <= 1000) {
                destination = "Balkans";
                price = budget * 0.80;
                hotelCamp = "Hotel";
            } else if (budget > 1000) {
                destination = "Europe";
                price = budget * 0.90;
                hotelCamp = "Hotel"
            }
            break;
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${hotelCamp} - ${price.toFixed(2)}`)
    
}
jurney(["1500", "summer"])