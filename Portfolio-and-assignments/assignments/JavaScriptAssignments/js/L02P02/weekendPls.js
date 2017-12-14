/**
 * Created by Thomas X on 11/29/2016.
 */
function weekendPls() {
    var i = new Date();

    var curday = i.getDay();

    var output = "";

    switch (curday) {
        case 0:
            output = "HET IS AL WEEKEND!!! WOHO";
            break;
        case 1: //de dag zelf zien we ook nog als een dag
            output = "5 dagen tot weekend";
            break;
        case 2:
            output = "4 dagen tot weekend";
            break;
        case 3:
            output = "3 dagen tot weekend";
            break;
        case 4:
            output = "2 dag tot weekend";
            break;
        case 5:
            output = "1 dag tot weekend";
            break;
    }
    document.getElementById("output7").innerHTML = output;

}