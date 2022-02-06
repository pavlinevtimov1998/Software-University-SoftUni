function skiTrip(input) {

    let days = Number(input[0]);
    let kindOfRoom = input[1];
    let evaluation = input[2];

    let price = 0;
    let discount = 0;

    switch (kindOfRoom) {
        case "apartment":
            price += 25;
            if (days < 10){
                discount+=0.30;
            } else if (days >= 10 && days <= 15){
                discount+=0.35;
            } else {
                discount+=0.50;
            }
            break;
        case "room for one person":
            price += 18;
            break;
        case "president apartment":
            price += 35;
            if (days < 10){
                discount+=0.10;
            } else if (days >= 10 && days <= 15){
                discount+=0.15;
            } else {
                discount+=0.20;
            }
            break;
    }

    days = days - 1;
    let allSum = price * days;
    allSum = allSum - (allSum * discount)

    if (evaluation === "positive"){
        let diff = 0.25;
        allSum = allSum + (allSum * diff)
        console.log(allSum.toFixed(2));
    } else {
        let diff = 0.10;
        allSum =  allSum - (allSum * diff);
        console.log(allSum.toFixed(2));
    }





}
skiTrip(["12",
"room for one person",
"positive"])