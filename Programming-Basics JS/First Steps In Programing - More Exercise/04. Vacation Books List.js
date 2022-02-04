function vacationBooksList(input){

    let a = Number(input[0]);

    let b = Number(input[1]);

    let c = Number(input[2]);

    let hours = a / b;
    let needHours = hours / c;

    console.log(needHours)
}
vacationBooksList(["212", "20", "2"])