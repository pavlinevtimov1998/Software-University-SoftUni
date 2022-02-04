function demo(input){
    let name = input[0];

    let numbOfProjects = input[1];

    let hours = numbOfProjects * 3;

    console.log (`The architect ${name} will need ${hours} hours to compleet ${numbOfProjects} project/s.`);

}
demo (["Georgi", 4])