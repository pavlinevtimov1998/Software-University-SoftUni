function passwordGuess(input){

    let isPass = input[0];
    let password = "s3cr3t!P@ssw0rd";

    if (isPass == password){
        console.log("Welcome")
    } else {
        console.log ("Wrong password!")
    }

}
passwordGuess (["s3cr3t!P@ssw0rd"])