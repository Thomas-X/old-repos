/**
 * Created by Thomas X on 1/23/2017.
 */
function totalCalc() {
    var itemOneValue = document.getElementById("input1").value;
    var itemTwoValue = document.getElementById("input2").value;
    var itemThreeValue = document.getElementById("input3").value;

    var totalPaintings = Number(itemOneValue) + Number(itemTwoValue) + Number(itemThreeValue);

    console.log(totalPaintings);


    if (itemOneValue < 0) {
        itemOneValue = 0;
    }
    if (itemTwoValue < 0) {
        itemTwoValue = 0;
    }
    if (itemThreeValue < 0) {
        itemThreeValue = 0;
    }

        if (itemOneValue != null || itemTwoValue != null || itemThreeValue != null) {

        console.log(itemOneValue);
        console.log(itemTwoValue);
        console.log(itemThreeValue);

            var itemOneTotal = itemOneValue * 679;
            var itemTwoTotal = itemTwoValue * 1045;
            var itemThreeTotal = itemThreeValue * 647;




            var sum = itemOneTotal + itemTwoTotal + itemThreeTotal;

            if (document.getElementById("safetyPackaging").checked) {
                sum += (122.25 * totalPaintings);
            }
            if (document.getElementById("quickDelivery").checked) {
                sum += 25;
            }
            if (document.getElementById("radio1").checked) {
                sum += (12.50 * totalPaintings);
            }
            else if (document.getElementById("radio2").checked) {
                sum += (14.95 * totalPaintings);
            }
            else if (document.getElementById("radio3").checked) {
                sum += (19.95 * totalPaintings) + 19.95;
            }
            else if (document.getElementById("radio4").checked) {
                sum += (21.95 * totalPaintings);
            }

            sum = parseFloat(Math.round(sum * 100) / 100).toFixed(2);

            document.getElementById("item1").innerHTML = "" + itemOneTotal;
            document.getElementById("item2").innerHTML = "" + itemTwoTotal;
            document.getElementById("item3").innerHTML = "" + itemThreeTotal;
            document.getElementById("totalCart").innerHTML = "Totaal: " + sum;

        }

}