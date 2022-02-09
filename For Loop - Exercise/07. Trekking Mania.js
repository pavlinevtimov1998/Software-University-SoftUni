function trekkingMania (input){

    let index = 0;
    let groups = input[index];
    index++

    let musala = 0;
    let monblan = 0;
    let kilimand = 0;
    let k2 = 0;
    let everest = 0;

    let allPeople = 0;

    for(let i = 0; i < groups; i++){
        let peopleInGroup = Number(input[index]);
        index++
        allPeople += peopleInGroup;
        
        if (peopleInGroup <= 5){
            musala+=peopleInGroup;
        } else if (peopleInGroup > 5 && peopleInGroup <= 12){
            monblan+=peopleInGroup;
        } else if (peopleInGroup > 12 && peopleInGroup <= 25){
            kilimand += peopleInGroup;
        } else if (peopleInGroup > 25 && peopleInGroup <= 40){
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }



    }

    let p1 = musala / allPeople * 100;
    let p2 = monblan / allPeople * 100;
    let p3 = kilimand / allPeople * 100;
    let p4 = k2 / allPeople * 100;
    let p5 = everest / allPeople * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
    






}
trekkingMania (["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])