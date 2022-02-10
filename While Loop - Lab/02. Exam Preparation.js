function examPreparation(input) {

    let badScore = Number(input[0]);
    let index = 1;
    let name = input[index];
    index++
    let countScore = 0;
    let score = input[index];
    let bad = 0;
    let sum = 0;
    let lastPractic = "";

    while (bad < badScore){
        if(name === "Enough"){
            let avg = sum / countScore;
            console.log(`Average score: ${avg.toFixed(2)}`);
            console.log(`Number of problems: ${countScore}`);
            console.log(`Last problem: ${lastPractic}`);
            break;
        }
        let inputName = name;
        let inputScore = Number(score);
        sum += inputScore;
        countScore++;
        if (inputScore <= 4){
            bad++;
        }

        lastPractic = name;
        index++
        name = input[index];
        index++;
        score = input[index];
    }
    if (bad >= badScore){
        console.log(`You need a break, ${badScore} poor grades.`);
    }



}
examPreparation (["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])