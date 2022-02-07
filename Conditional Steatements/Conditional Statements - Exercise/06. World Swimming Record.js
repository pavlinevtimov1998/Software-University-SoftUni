function worldSwimmingRecord (input){

    let recSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let secOfMeters = meters * timeForMeter;

    let swownes =  Math.floor (meters / 15);
    swownes = swownes * 12.5;

    let allTime = secOfMeters + swownes;

    let dif = allTime - recSec;


    if (recSec >  allTime){
        console.log (`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
    } else {
        console.log (`No, he failed! He was ${dif.toFixed(2)} seconds slower.`)
    }

}
worldSwimmingRecord (["55555.67","3017","5.03"])