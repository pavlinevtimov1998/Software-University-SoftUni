function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);
    let result = width * length * higth;
    let sum = 0;
    let isHaveFreeSpace = true;

    let index = 3;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let com = Number(command);
        sum += com;
        command = input[index];
        index++;

        if (sum >= result) {
            isHaveFreeSpace = false;
            sum -= result;
            console.log(`No more free space! You need ${Math.abs(sum)} Cubic meters more.`);
            break;
        }

    }

    if (isHaveFreeSpace) {
        sum -= result;
        console.log(`${Math.abs(sum)} Cubic meters left.`);
    }






} moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])