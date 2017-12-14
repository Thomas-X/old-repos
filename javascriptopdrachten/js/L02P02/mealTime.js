/**
 * Created by Thomas X on 11/29/2016.
 */
function mealTime() {
    var d = new Date();
    var curHour = d.getHours();
    var output = "";

    // d.getMinutes();
    // d.getSeconds();

    if (curHour >= 7 && curHour <= 12) { //get number in range? this is pure magic.
        output = "Ontbijt tijd!";
    } //wot?
    if (curHour >= 13 && curHour <= 17) {
        output = "Middag eten!";
    }
    if (curHour >= 18 && curHour <= 23) {
        output = "Avound eten!";
    }
    if (curHour >= 0 && curHour <= 7) {
        output = "Tijd om ijs te eten met de koelkast deur open terwijl je jezelf naar bed slaapt";
    }
    document.getElementById("output8").innerHTML = output;
}