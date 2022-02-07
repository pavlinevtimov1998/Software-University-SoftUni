function onTimeForTheExam(input) {

    let hourForEx = Number(input[0]);
    let minutesForEx = Number(input[1]);
    let hourOfAriv = Number(input[2]);
    let minutesOfAriv = Number(input[3]);

    let minEx = hourForEx * 60 + minutesForEx;
    let minAriv = hourOfAriv * 60 + minutesOfAriv;

    if (minEx < minAriv) {
        console.log(`Late`);

        let dif = minAriv - minEx;

        if (dif >= 60) {
            let h = Math.floor(dif / 60);
            let min = dif % 60;

            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`)
            } else {
                console.log(`${h}:${min} hours after the start`)
            }
        } else {
            let min = dif % 60;
            console.log(`${min} minutes after the start`)
        }
    } else if (minEx - minAriv <= 30) {
        console.log(`On time`);
        let diff = minEx - minAriv;
        if (diff !== 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    } else {
        console.log(`Early`);
        let diff = minEx - minAriv;
        if (diff >= 60){
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if ( min < 10){
                console.log(`${h}:0${min} hours before the start`)
            } else {
                console.log(`${h}:${min} hours before the start`)
            }
        } else {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    }
}
onTimeForTheExam(["11",
"30",
"12",
"29"])