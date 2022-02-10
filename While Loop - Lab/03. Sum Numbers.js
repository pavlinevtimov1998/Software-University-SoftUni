function sumNumbers (input){

    let targetSum = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(sum < targetSum){

        let currentSum = Number(input[index]);
        sum += currentSum;
        index++;

    }
    console.log(sum);

}
sumNumbers (["100","10","20","30","40"]);