function oldBooks(input) {

    let index = 0;
    let book = input[index];
    index++
    let searching = input[index];
    index++
    let count = 0;;


    while (searching !== book) {
        count++;
        searching = input[index];
        index++;
        if (searching === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${count} books.`);
            break;
        }
    }

    if (searching === book){
        console.log(`You checked ${count} books and found it.`);
    }


}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])