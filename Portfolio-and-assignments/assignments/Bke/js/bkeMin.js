/**
 * Created by Thomas X on 1/12/2017.
 */
function crossWin(counter) {
    return playfieldsArray[counter].getAttribute('src') == "img/cross.jpg"
}
function checkWin(masterCounter2, counter1_2, counter2_2) {
    if (circleWin(masterCounter2) && circleWin(counter1_2) && circleWin(counter2_2)) {
        circlewin = true;
    }
    if (crossWin(masterCounter2) && crossWin(counter1_2) && crossWin(counter2_2)) {
        crosswin = true;
    }
}
function circleWin(counter) {
    return playfieldsArray[counter].getAttribute('src') == "img/circle.jpg"
}


function setOne() {
    for (var i = 0; i < 3; i++) {
        masterCounter = i;
        counter1 = masterCounter + 3;
        counter2 = masterCounter + 3;
        checkWin(masterCounter, counter1, counter2);
    }
}

function setTwo(exponVar2) {
    masterCounter = exponVar;
    exponVar = exponVar2;
    counter1 = masterCounter + 1;
    counter2 = masterCounter + 2;
    checkWin(masterCounter, counter1, counter2);
}
function setThree() {
    for (var i = 0; i < 2; i++) {
        if (i == 0) {
            masterCounter = 0;
            counter1 = masterCounter + 4;
            counter2 = masterCounter + 8
        }
        if (i == 1) {
            masterCounter = 2;
            counter1 = masterCounter + 2;
            counter2 = masterCounter + 4;
        }
        checkWin(masterCounter, counter1, counter2);
    }
}
for (var mainCounter = 0; mainCounter < 7; mainCounter++) {
    var counter1 = 0;
    var counter2 = 0;
    var masterCounter = mainCounter;
    var exponVar = 0;

    if (masterCounter >= 0 && masterCounter <= 2) {
        setOne();
    }
    else if (masterCounter >= 3 && masterCounter <= 5) {
        var exponVar2 = 0;
        for (var i = 0; i < 3; i++) {
            setTwo(exponVar2)
            exponVar2 += 3;
        }
    }
    else if (masterCounter >= 6 && masterCounter <= 7) {
        setThree();
    }
}