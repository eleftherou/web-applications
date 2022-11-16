
//DOM queries (2)
document.querySelector("body").style.backgroundColor = "#E2E2E2";

document.querySelector("#sideinfo").style.backgroundColor = "#BCBCBC";

//Dom events

//Changing Image
var x = document.getElementById("firstimg");
x.addEventListener("mouseover", changeImg);
x.addEventListener("mouseout", initialImg);

function changeImg() {
    var elm1 = document.getElementById("firstimg");
    elm1.src = "images/albert2.jpg";
}

function initialImg() {
    var elm2 = document.getElementById("firstimg");
    elm2.src = "images/Albert_Einstein.jpg";
}


// // //change css property
// var y = document.getElementsByTagName("nav")
// function navigation(){
//     y.style.color="blue";
     
// }

// y.addEventListener("click", navigation);


//Date
var p1 = document.getElementById("par1");
var p2 = document.getElementById("par2");
var p3 = document.getElementById("par3");
var p4 = document.getElementById("par4");


function dating() {
    var myDate = new Date();
    var today = myDate.getDay();

    if (today == 0) { //Sunday
        p1.style.backgroundColor = "red";
        p2.style.backgroundColor = "red";
        p3.style.backgroundColor = "red";
        p4.style.backgroundColor = "red";

    } else if (today == 1) {
        p1.style.backgroundColor = "blue";
        p2.style.backgroundColor = "blue";
        p3.style.backgroundColor = "blue";
        p4.style.backgroundColor = "blue";

    } else if (today == 2) {
        p1.style.backgroundColor = "white";
        p2.style.backgroundColor = "white";
        p3.style.backgroundColor = "white";
        p4.style.backgroundColor = "white";

    } else if (today == 3) {
        p1.style.backgroundColor = "yellow";
        p2.style.backgroundColor = "yellow";
        p3.style.backgroundColor = "yellow";
        p4.style.backgroundColor = "yellow";
    } else if (today == 4) {
        p1.style.backgroundColor = "green";
        p2.style.backgroundColor = "green";
        p3.style.backgroundColor = "green";
        p4.style.backgroundColor = "green";
    } else if (today == 5) {
        p1.style.backgroundColor = "green";
        p2.style.backgroundColor = "green";
        p3.style.backgroundColor = "green";
        p4.style.backgroundColor = "green";
    } else if (today == 6) {
        p1.style.backgroundColor = "#e7545b";
        p2.style.backgroundColor = "#e7545b";
        p3.style.backgroundColor = "#e7545b";
        p4.style.backgroundColor = "#e7545b";

    }

}

function normal(){
    p1.style.backgroundColor = "#BCBCBC";
    p2.style.backgroundColor = "#BCBCBC";
    p3.style.backgroundColor = "#BCBCBC";
    p4.style.backgroundColor = "#BCBCBC";

}

p1.addEventListener("mouseover",dating);
p2.addEventListener("mouseover",dating);
p3.addEventListener("mouseover",dating);
p4.addEventListener("mouseover",dating);

p1.addEventListener("mouseout",normal);
p2.addEventListener("mouseout",normal);
p3.addEventListener("mouseout",normal);
p4.addEventListener("mouseout",normal);
