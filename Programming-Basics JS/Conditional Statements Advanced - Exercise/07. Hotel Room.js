function hotelRoom(input) {

    let month = input[0];
    let numbOfDays = Number(input[1]);
    let apartament = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October":
            apartament = 65 * numbOfDays;
            studio = 50 * numbOfDays;
            if (numbOfDays > 7 && numbOfDays < 15 ){
                studio = studio - (studio * 0.05);
            } else if (numbOfDays > 14){
                studio = studio - (studio * 0.30);
            } 
            if (numbOfDays > 14){
                apartament = apartament - (apartament * 0.10);
            }
            break;
        case "June":
        case "September":
            apartament = 68.70 * numbOfDays;
            studio = 75.20 * numbOfDays;
            if(numbOfDays > 14){
                studio = studio - (studio * 0.20);
            }
            if (numbOfDays > 14){
                apartament = apartament - (apartament * 0.10);
            }
            break;
        case "July":
        case "August":
            apartament = 77 * numbOfDays;
            studio = 76 * numbOfDays;
            if (numbOfDays > 14){
                apartament = apartament - (apartament * 0.10);
            }
            break;
    }

    console.log(`Apartment: ${apartament.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)

}
hotelRoom(["June","14"])