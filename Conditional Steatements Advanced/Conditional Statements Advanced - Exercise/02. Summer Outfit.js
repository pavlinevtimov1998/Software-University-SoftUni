function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeInDay = input[1];

    let outfit = "Shirt";
    let shoes = "Sneakers";


    if (timeInDay === "Morning" && degrees >= 10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Morning" && degrees >= 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Morning" && degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
    if (timeInDay === "Afternoon" && degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Afternoon" && degrees >= 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Afternoon" && degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
    if (timeInDay === "Evening" && degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Evening" && degrees >= 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeInDay === "Evening" && degrees >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
}
summerOutfit(["27", "Evening"])