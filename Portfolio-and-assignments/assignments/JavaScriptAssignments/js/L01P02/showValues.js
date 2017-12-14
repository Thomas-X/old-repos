/**
 * Created by Thomas on 11/20/2016.
 */


function showValues() {
    // if (address != null && ageMain != null && person != null) {

        //get this
        var address2 = document.getElementById("output4").innerHTML;
        var ageMain2 = document.getElementById("output2").innerHTML;
        var person2 = document.getElementById("output").innerHTML;

        //get this
        var output = "";
        var values = {person2, ageMain2, address2};
        var someVar;

        //kinda get this
        for (someVar in values) {
            output += values[someVar] + " <br>";
        }
        document.getElementById("output5").innerHTML = output;
    // }

}