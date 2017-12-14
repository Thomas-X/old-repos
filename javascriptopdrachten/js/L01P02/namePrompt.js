/**
 * Created by Thomas on 11/20/2016.
 */
person = "";
function namePrompt() {
    var person = prompt("Please, enter your name");
    // var nonumbers = isNaN(person); too complicated, too lazy to check whether or not user input is valid

    if (person != null) {
        document.getElementById("output").innerHTML =
            "Your name is " + person;
    }
}