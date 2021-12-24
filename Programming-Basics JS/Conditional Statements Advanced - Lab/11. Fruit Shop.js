function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let allSum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": allSum = quantity * 2.50; console.log(allSum.toFixed(2)); break;
            case "apple": allSum = quantity * 1.20; console.log(allSum.toFixed(2)); break;
            case "orange": allSum = quantity * 0.85; console.log(allSum.toFixed(2)); break;
            case "grapefruit": allSum = quantity * 1.45; console.log(allSum.toFixed(2)); break;
            case "kiwi": allSum = quantity * 2.70; console.log(allSum.toFixed(2)); break;
            case "pineapple": allSum = quantity * 5.50; console.log(allSum.toFixed(2)); break;
            case "grapes": allSum = quantity * 3.85; console.log(allSum.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": allSum = quantity * 2.70; console.log(allSum.toFixed(2)); break;
            case "apple": allSum = quantity * 1.25; console.log(allSum.toFixed(2)); break;
            case "orange": allSum = quantity * 0.90; console.log(allSum.toFixed(2)); break;
            case "grapefruit": allSum = quantity * 1.60; console.log(allSum.toFixed(2)); break;
            case "kiwi": allSum = quantity * 3.00; console.log(allSum.toFixed(2)); break;
            case "pineapple": allSum = quantity * 5.60; console.log(allSum.toFixed(2)); break;
            case "grapes": allSum = quantity * 4.20; console.log(allSum.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}
fruitShop(["tomato", "Monday", "1"])