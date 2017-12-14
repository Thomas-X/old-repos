var start = false;
var toggle = true;
var cross = 0;
var circle = 0;
var total = 0;
var maxplays = 0;
var crosswin = false;
var circlewin = false;
var reset = false;
var toggle2 = true;
var playfieldsArray = document.querySelectorAll("#speelveld tr td img");
function clearCells() {
    playfieldsArray.forEach(function (element) {
        element.src = "img/empty.jpg";
    });
}
function btnStartReset() {
    var id = document.getElementById("gameButton");
    if (toggle2) {
        id.innerText = 'Reset spel';
        start = true;
    }
    else if (toggle2 == false) {
        start = false;
        toggle = true;
        cross = 0;
        circle = 0;
        total = 0;
        maxplays = 0;
        crosswin = false;
        circlewin = false;
        reset = false;
        clearCells()
        document.getElementById("cross").innerHTML = "0";
        document.getElementById("circle").innerHTML = "0";
        document.getElementById("total").innerHTML = "0";
        id.innerText = 'Start spel';
    }
    toggle2 = !toggle2;
}
function bke(id) {
    if (start) {
        var id2 = document.getElementById(id);
        document.getElementById('playerImage').src = "img/cross.jpg";
        if (id2.getAttribute('src') == "img/empty.jpg") {
            //fills in the image depending on who's turn it is
            if (toggle) {
                document.getElementById('playerImage').src = "img/circle.jpg";
                id2.src = "img/cross.jpg";
            }
            else if (!toggle) {
                document.getElementById('playerImage').src = "img/cross.jpg";
                id2.src = "img/circle.jpg";
            }

            //which players' turn it is
            var id2 = document.getElementById("speler"); //?!?
            if (toggle) {
                id2.innerHTML = "2";
            }
            else if (!toggle) {
                id2.innerHTML = "1";
            }
            toggle = !toggle;

            function crossWin(counter) {
                return playfieldsArray[counter].getAttribute('src') == "img/cross.jpg"
            }

            function circleWin(counter) {
                return playfieldsArray[counter].getAttribute('src') == "img/circle.jpg"
            }

            function checkWin(masterCounter2, counter1_2, counter2_2) {
                if (circleWin(masterCounter2) && circleWin(counter1_2) && circleWin(counter2_2)) {
                    circlewin = true;
                }
                if (crossWin(masterCounter2) && crossWin(counter1_2) && crossWin(counter2_2)) {
                    crosswin = true;
                }
            }

            for (var counter7 = 0; counter7 < 3; counter7++) {

                //declaring vars
                var counter5 = 0;
                var counter6 = 0;
                var masterCounter = counter7;
                //*****
                //checking which set to control
                //*****
                //set 2
                if (counter7 == 0) {
                    for (var i = 0; i < 3; i++) {
                        var exponVar = 0;
                        if (i == 1) {
                            exponVar = i + 2;
                        }
                        if (i == 2) {
                            exponVar = i + 4;
                        }
                        masterCounter = exponVar/**var?!!?; */;
                        counter5 = masterCounter + 1;
                        counter6 = masterCounter + 2;
                        checkWin(masterCounter, counter5, counter6);
                    }
                }
                //set 1
                if (counter7 == 1) {
                    for (var i = 0; i < 3; i++) {
                        masterCounter = i;
                        counter5 = masterCounter + 3;
                        counter6 = counter5 + 3
                        checkWin(masterCounter, counter5, counter6);
                    }
                }
                //set 3
                if (counter7 == 2) {
                    for (var i = 0; i < 2; i++) {
                        if (i == 0) {
                            masterCounter = i;
                            counter5 = masterCounter + 4;
                            counter6 = masterCounter + 8;
                        }
                        if (i == 1) {
                            masterCounter = i + 1;
                            counter5 = masterCounter + 2;
                            counter6 = masterCounter + 4;
                        }
                        checkWin(masterCounter, counter5, counter6);
                    }
                }
            }
            //max amount of plays, to see if it's a draw
            maxplays++;
            if (crosswin) {
                alert("Cross wins!");
                clearCells()
                cross++;
                document.getElementById("cross").innerHTML = "" + cross;
                total++;
                document.getElementById("total").innerHTML = "" + total;
                toggle = true;
                id2.innerHTML = "1";
                crosswin = false;
                maxplays = 0;
                document.getElementById('playerImage').src = "img/cross.jpg";
            }
            if (circlewin) {
                alert("Circle wins!");
                clearCells()
                circle++;
                document.getElementById("circle").innerHTML = "" + circle;
                total++;
                document.getElementById("total").innerHTML = "" + total;
                toggle = true;
                id2.innerHTML = "1";
                circlewin = false;
                maxplays = 0;
                document.getElementById('playerImage').src = "img/cross.jpg";
            }
            if (maxplays >= 9) {
                maxplays = 0;
                alert("Draw!");
                clearCells()
                toggle = true;
                id2.innerHTML = "1";
                total++;
                document.getElementById("total").innerHTML = "" + total;
            }
        }
    }
}