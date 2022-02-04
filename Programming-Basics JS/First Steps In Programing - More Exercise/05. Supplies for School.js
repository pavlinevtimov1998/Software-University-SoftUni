function suppliesForSchool(input){

    let pen = Number(input[0]);
    let pensil = Number(input[1]);
    let proper = Number(input[2]);
    let discord = Number(input[3]);

    let resPen = pen * 5.80;
    let resPensil = pensil * 7.20;
    let resProper = proper * 1.20;

    let result = resPen + resPensil + resProper;
    let all = result - (result * (discord / 100))

    console.log(all)
}
suppliesForSchool(["2", "3", "4", "25"])