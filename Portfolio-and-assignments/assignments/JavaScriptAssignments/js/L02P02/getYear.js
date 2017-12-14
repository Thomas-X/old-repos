/**
 * Created by Thomas X on 11/29/2016.
 */
function getYear() {
    var output = "";
    var output2 = "";

    var d = new Date();

    output = d.getYear();
    output2 = d.getUTCSeconds();

    document.getElementById("output11").innerHTML = d
}