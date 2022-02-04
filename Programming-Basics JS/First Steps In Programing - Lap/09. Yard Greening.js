function yardGreening(input){

    let a = input[0];

    let thePrice = 7.61 * a;

    let discount = 0.18 * thePrice;

    let endSum = thePrice - discount;

    console.log(`The final price is: ${endSum} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}
yardGreening(["550"])