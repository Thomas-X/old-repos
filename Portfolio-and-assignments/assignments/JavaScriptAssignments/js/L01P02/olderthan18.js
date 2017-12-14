/**
 * Created by Thomas on 11/20/2016.
 */
age = "";
function olderthan18() {
    var age = prompt("State your age");

    if (age > 18) {
        document.getElementById("output3").innerHTML = "";
        document.getElementById("output3").innerHTML = "You are older than 18! Woho!";
    }
    else {
        document.getElementById("output3").innerHTML = "";
        document.getElementById("output3").innerHTML = "Hey kiddo! You're not supposed to be here!";
    }

    if (!age) {
        document.getElementById("output3").innerHTML = "Please enter your age in assignment 3 & 4";
    }
}