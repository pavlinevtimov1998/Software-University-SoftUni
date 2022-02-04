function fishTank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let persentage = Number(input[3]);

    let volume = lenght * width * height;
    let decimeter = volume * 0.001;
    let noneSpace = persentage / 100;

    let needLiters = decimeter * (1 - noneSpace)
    
    console.log(needLiters)

}
fishTank(["105", "77", "89", "18.5"])