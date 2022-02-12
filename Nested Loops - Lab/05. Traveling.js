function traveling(input) {

    let index = 0;
    let comand = input[index];
    index++;

    while(comand !== "End"){
        let destination = comand;
        let needMoney = Number(input[index]);
        index++;
        let sum = 0;
        while (needMoney > sum){
            let saveMoney = Number(input[index]);
            index++;
            sum += saveMoney;
        }
        console.log(`Going to ${destination}!`);
        comand = input[index];
        index++;
    }










} traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
