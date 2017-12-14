/**
 * Created by Thomas X on 12/13/2016.
 */
var curnum = 23;
document.getElementById("total").innerHTML = "Total amount of guinea pigs alive is " + curnum;
var input;
var valid = false;
var text;
var message = document.getElementById("message");
var total = document.getElementById("total");
var aimove = document.getElementById("aimove");
var audio = document.getElementById('audio');
var botWin = false;

function game() {
    //checking valid input
    input = document.getElementById("inputisNumber").value;
    if (input >= 1 && input <= 3) {
        valid = true;
        text = "";
    }
    else {
        valid = false;
        text = "Invalid input!";
    }
    message.innerHTML = text;
    //if valid, do this stuffs
    if (valid) {
        var moveai = 0;
        //player's move minus the total
        curnum -= input;
        //ai
        if (curnum % 4 == 0) {
            moveai = 3;
            botWin = true;
        } else if (curnum % 4 == 1) {
            var randomNum = Math.floor((Math.random() * 3) + 1);
            moveai = randomNum;
            botWin = false;
        } else if (curnum % 4 == 2) {
            moveai = 1;
            botWin = true;
        } else if (curnum % 4 == 3) {
            moveai = 2;
            botWin = true;
        }
        aimove.innerHTML = "AI's kills " + moveai + " guinea pigs.";
        curnum -= moveai;
        document.getElementById('audio').play();
        for (var i = document.images.length; i-- > 0;) {
            document.images[i].parentNode.removeChild(document.images[i]);
        }                       //dunno clears all images
        for (var i = 0; i < curnum; i++) {
            var elem = document.createElement("img");
            elem.src = "img/cavia.jpg";
            elem.setAttribute("height", "100px");
            elem.setAttribute("width", "100px");
            document.getElementById("guineapigs").appendChild(elem);
        }
    }
    //otherwise, if the numbers 3, you can just go 3 and win.
    if (curnum != 1) {
        total.innerHTML = "Total amount of guinea pigs alive is " + curnum;
        audio.play();
    }
    if (botWin && curnum <= 0) {
        message.innerHTML = "You lose!!";
        total.innerHTML = "";
        aimove.innerHTML = "";
        audio.play();
        curnum = 23;
    }
    if (!botWin && curnum <= 0) {
        message.innerHTML = "You win!!";
        total.innerHTML = "";
        aimove.innerHTML = "";
        audio.play();
        curnum = 23;
    }
}
function resetGame() {
    curnum = 23;
    total.innerHTML = "Total amount of guinea pigs alive is " + curnum;
    message.innerHTML = "";
    aimove.innerHTML = "";
    for (var i = document.images.length; i-- > 0;) {
        document.images[i].parentNode.removeChild(document.images[i]);
    }                       //dunno clears all images
    for (var i = 0; i < curnum; i++) {
        var elem = document.createElement("img");
        elem.src = "img/cavia.jpg";
        elem.setAttribute("height", "100px");
        elem.setAttribute("width", "100px");
        document.getElementById("guineapigs").appendChild(elem);
    }
}