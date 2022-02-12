function combinations(input) {

    let n = Number(input[0]);
    let validCombinations = 0;

    for (let i = 0; i <= n; i++) {
        for (let o = 0; o <= n; o++) {
            for (let j = 0; j <= n; j++) {
                if (i + o + j === n){
                    validCombinations++;
                }
            }
        }
    }
    console.log(validCombinations);

}
combinations(["25"])