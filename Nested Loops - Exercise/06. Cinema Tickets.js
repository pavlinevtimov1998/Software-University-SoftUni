function cinemaTickets(input) {
    let index = 0;
    let nameOfMovie = input[index];
    index++;

    let numb2 = 0;
    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidsTicketsCount = 0;

    while (nameOfMovie !== "Finish") {
        let numbOfPlaces = Number(input[index]);
        index++;
        let percentOfGetPlaces = 0;
        let numb = 0;
        let typeOfTicket = input[index];
        index++;
        while (typeOfTicket !== "End" && typeOfTicket !== "Finish") {
            switch (typeOfTicket) {
                case "standard": standardTicketsCount++;
                    break;
                case "kid": kidsTicketsCount++;
                    break;
                case "student": studentTicketsCount++;
                    break;
            }
            numb++;
            numb2++;
            if (numbOfPlaces <= numb) {
                break;
            }
            typeOfTicket = input[index];
            index++;
        }
        percentOfGetPlaces = numb / numbOfPlaces * 100;
        console.log(`${nameOfMovie} - ${percentOfGetPlaces.toFixed(2)}% full.`);
        nameOfMovie = input[index];
        index++;
    }
    let persentStudent = studentTicketsCount / numb2 * 100;
    let persStandard = standardTicketsCount / numb2 * 100;
    let persKids = kidsTicketsCount / numb2 * 100;
    console.log(`Total tickets: ${numb2}`);
    console.log(`${persentStudent.toFixed(2)}% student tickets.`);
    console.log(`${persStandard.toFixed(2)}% standard tickets.`);
    console.log(`${persKids.toFixed(2)}% kids tickets.`);


}
cinemaTickets
(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])