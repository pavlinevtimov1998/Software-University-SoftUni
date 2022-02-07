function lunchBreak (input){

    let nameOfMovie = input[0];
    let movieEnd = Number(input[1]);
    let rest = Number(input[2]);

    let timeLunch = rest * 1/8;
    let restTime = rest * 1/4;
    let oderTime = rest - timeLunch - restTime;

    if (oderTime >= movieEnd){
        oderTime = Math.ceil(Math.abs(oderTime - movieEnd));
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${oderTime} minutes free time.`)
    } else if (oderTime < movieEnd){
        oderTime = Math.ceil(Math.abs (oderTime - movieEnd));
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${oderTime} more minutes.`)
    }


}
lunchBreak(["Teen wolf","48","60"])