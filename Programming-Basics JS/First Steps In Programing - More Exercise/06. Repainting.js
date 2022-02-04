function repainting(input){

    let nylon = Number(input[0]);
    let color = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumOfNylon = (nylon + 2) * 1.50;
    let sumOfColor = ((color + (color * 10/100)) * 14.50);
    let sumOfthinner = thinner * 5.00;
    let sumForBilla = 0.40;

    let result = sumOfNylon + sumOfColor + sumOfthinner + sumForBilla;
    let workers = (result * (30 / 100)) * hours;
    let endPrice = result + workers;

    console.log(endPrice)

}
repainting(["10", "11", "4", "8"])