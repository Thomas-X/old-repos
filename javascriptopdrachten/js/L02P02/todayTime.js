/**
 * Created by Thomas X on 11/29/2016.
 */
function todayTime() {
    var i = new Date();
    var dag = new Array(7);
    dag[0] = "Sunday";
    dag[1] = "Monday";
    dag[2] = "Tuesday";
    dag[3] = "Wednesday";
    dag[4] = "Thursday";
    dag[5] = "Friday";
    dag[6] = "Saturday";

    var output = dag[i.getDay()]; //.getDay returned een nummer van welke dag het is, dit zetten we om naar een echte dag via array
    document.getElementById("output6").innerHTML = "Today it's " + output + ".";
}