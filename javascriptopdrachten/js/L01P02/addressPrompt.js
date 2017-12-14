/**
 * Created by Thomas on 11/20/2016.
 */
address = "";
function addressPrompt() {
    var address = prompt("Please state your adres.");
    if (address != null) {
        document.getElementById("output4").innerHTML = "Your address is: " + address;
    }
}