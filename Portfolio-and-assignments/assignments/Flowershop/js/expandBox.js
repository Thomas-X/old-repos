/**
 * Created by Thomas X on 11/24/2016.
 */
var toggle = true;
function expandBox(id) {
    if (toggle) {
        // document.getElementById(id).style.height = "220px";
        // document.getElementById("7").style.display = "block";
    }
    else {
        // document.getElementById(id).style.height = "";
        // document.getElementById().style.display = "none";
    }
    toggle = !toggle;
}