function worldTennis(input) {

    index = 0;
    let numbOfTournaments = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++


    let points = 0;
    let percentCount = 0;

    for (let i = 0; i <= numbOfTournaments; i++) {

        let stage = input[index];
        index++

        if (stage === "W") {
            points += 2000;
            percentCount++
        } else if (stage === "F") {
            points += 1200;
        } else if ( stage === "SF"){
            points += 720;
        }

    }

    let finalPoints = points + startPoints;
    console.log(`Final points: ${finalPoints}`)
    let avarage = points / numbOfTournaments;
    console.log(`Average points: ${Math.floor(avarage)}`)
    let percentage = (percentCount/numbOfTournaments) * 100;
    console.log(`${percentage.toFixed(2)}%`)


}
worldTennis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])