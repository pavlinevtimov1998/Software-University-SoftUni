function histogram (input){

    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1;i <= n; i++){
        let x = Number(input[i])
        if (x < 200){
            p1++
        } else if (x >= 200 && x < 400){
            p2++
        } else if (x >= 400 && x < 600){
            p3++
        } else if (x>= 600 && x < 800){
            p4++
        } else {
            p5++
        }
    }
    let p11 = p1 / n * 100;
    let p12 = p2 / n * 100;
    let p13 = p3 / n * 100;
    let p14 = p4 / n * 100;
    let p15 = p5 / n * 100;

    console.log(p11.toFixed(2) + "%");
    console.log(p12.toFixed(2) + "%");
    console.log(p13.toFixed(2) + "%");
    console.log(p14.toFixed(2) + "%");
    console.log(p15.toFixed(2) + "%");



}
histogram(["3","1","2","999"])