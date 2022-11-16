var books = [];
var favs = [];
function searchBook(query) {
    const url = `https://reststop.randomhouse.com/resources/works?search=${query}`;
    let printbooks = "";
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })

        .then((response) => response.json())

        .then((jsonData) => {
            //console.log(jsonData);
            for (i = 0; i < jsonData.work.length; i++) {
                var authorname = jsonData.work[i].authorweb;
                var arr = authorname.split(",");
                authorname = arr[1] + " " + arr[0];
                var book_title = jsonData.work[i].titleweb;
                var bookid = jsonData.work[i].workid;

                li = "<li> <strong> Title: </strong>" + book_title + " •✦•  <strong> Author:  </strong>" + authorname +
                    `<img src=icons/white.png  onClick= 'clickItem (${bookid})' id = '${bookid}'  title='${book_title}' name = '${authorname}'/> <hr>`
                printbooks += li;

                document.getElementById("errorMessage").innerHTML = "";
            }
            document.getElementById("errorMessage").innerHTML = "";
            document.getElementById("books").innerHTML = printbooks;

        })

        .catch((error) => {
            document.getElementById("errorMessage").innerHTML = "There are no books or authors matched with your search.";
            document.getElementById("books").innerHTML = "";
        })

}

//add to favourites
function clickItem(bid) {
    // retrieve all the wanted parameters to send at index.js
    var authorname = document.getElementById(bid).name;
    var title = document.getElementById(bid).title;
    var icon = document.getElementById(bid);
    icon.src = "icons/red.png";
    var bool = "0";

    for (i = 0; i < favs.length; i++) { //tsekarei an yparxei idi sta agapimena
        if (favs[i] === bid) {
            bool = "1";
            favs[i] = 0;
            break;
        }
    }
    if (bool === "1") { //mpainei otan exei ginei aitima na bgei apo ta agapimena
        icon.src = "icons/white.png";
        console.log("Removed from favourites!");
        $.ajax({
            type: "post",
            url: "/",
            data: { bid, authorname, title, bool },
        });
    }
    else { //add in favourites
        bool = "0";
        console.log(authorname);
        console.log(title);
        console.log(bid);
        favs.push(bid);
        // send values
        $.ajax({
            type: "post",
            url: "/",
            data: { bid, authorname, title, bool },
        });
        console.log("Added in favourites!");

    }
}

window.onload = () => {
    const searchElement = document.getElementById("search");
    searchElement.onkeyup = (event) => {
        searchBook(searchElement.value);
    };
}