/**
 * Created by Thomas on 11/20/2016.
 */
ageMain = "";
function agePrompt() {
    var ageMain = prompt("What's you're age?"); //same here, too much work to check is user input is valid
    if (ageMain != null) {
        document.getElementById("output2").innerHTML = "Your age is " + ageMain;
    }
}