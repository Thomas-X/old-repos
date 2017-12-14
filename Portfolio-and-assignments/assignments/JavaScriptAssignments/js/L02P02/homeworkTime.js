/**
 * Created by Thomas X on 11/29/2016.
 */
function homeworkTime() {
    var d = new Date();
    var output;
    if (d.getDate() < 30) {
        output = "op tijd";
    }
    if (d.getDate() > 30) {
        output = "te laat";
    }
    document.getElementById("output12").innerHTML = output;
}