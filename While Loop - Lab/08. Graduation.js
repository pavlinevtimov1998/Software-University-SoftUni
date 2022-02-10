function graduation(input) {

    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00){
            ++excluded
            if (excluded > 0){
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
        }
        grades++
        sum += grade;
    }
    if (grades >= 12){
    let avg = sum / 12;
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }



} graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])