function areaOfFigures(input){

    let figure = (input[0]);
    let numb = Number(input[1]);
    let numb2 = Number(input[2]);

    if (figure === "square"){
        console.log(numb * numb.toFixed(3))
    } else if (figure === "rectangle"){
        console.log(numb * numb2.toFixed(3))
    } else if (figure === "circle"){
        console.log((Math.PI * Math.pow(numb,2)).toFixed(3))
    } else if (figure === "triangle"){
        console.log(((numb * numb2) / 2).toFixed(3))
    }
}
areaOfFigures(["circle","6"])