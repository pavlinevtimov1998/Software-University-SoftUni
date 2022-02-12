function trainTheTrainers(input) {

    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let sumOfAllDegrees = 0;

    while(command !== "Finish"){
        let name = command;
        let degree = Number(input[index]);
        let avg = 0;
        let sumOfDegree = 0;
        for(let i = 0; i < people; i++){
            sumOfDegree += degree;
            sumOfAllDegrees += degree;
            index++;
            degree = Number(input[index]);
            counter++;
        }
        avg += sumOfDegree / people;
        console.log(`${name} - ${avg.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let average = sumOfAllDegrees / counter;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);

} trainTheTrainers (["3", 
"Arrays", 
"4.53", 
"5.23", 
"5.00", 
"Lists", 
"5.83", 
"6.00", 
"5.42", 
"Finish"]) 