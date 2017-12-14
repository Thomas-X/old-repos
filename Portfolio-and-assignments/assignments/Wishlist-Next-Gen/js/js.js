/**
 * Created by Thomas X on 12/7/2016.
 */
var counter = 1;
function addInput() {
    var createElement = document.createElement("input");
    var parentElement = document.getElementById("inputs");

    createElement.type = "text";
    createElement.name = "item" + counter;

    counter++;

    parentElement.appendChild(createElement);
    parentElement.appendChild(document.createElement("br"));

}