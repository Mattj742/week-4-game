var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
$("#randomNumber").html(randomNumber);
var hiddenOne = Math.floor(Math.random() * (12 - 1) + 1);
var hiddenTwo = Math.floor(Math.random() * (12 - 1) + 1);
var hiddenThree = Math.floor(Math.random() * (12 - 1) + 1);
var hiddenFour = Math.floor(Math.random() * (12 - 1) + 1);
var yourNumber = 0;
$("#yourNumber").html(yourNumber);

$("#crystalOne").click(crystalOne);
$("#crystalTwo").click(crystalTwo);
$("#crystalThree").click(crystalThree);
$("#crystalFour").click(crystalFour);


function crystalOne() {
    yourNumber = parseInt(yourNumber) + parseInt(hiddenOne);
    $("#yourNumber").html(yourNumber);
    if (yourNumber === randomNumber) {
        win();
    }
    if (yourNumber > randomNumber) {
        lose();
    }
}

function crystalTwo() {
    yourNumber = parseInt(yourNumber) + parseInt(hiddenTwo);
    $("#yourNumber").html(yourNumber);
    if (yourNumber === randomNumber) {
        win();
    }
    if (yourNumber > randomNumber) {
        lose();
    }
}

function crystalThree() {
    yourNumber = parseInt(yourNumber) + parseInt(hiddenThree);
    $("#yourNumber").html(yourNumber);
    if (yourNumber === randomNumber) {
        win();
    }
    if (yourNumber > randomNumber) {
        lose();
    }
}

function crystalFour() {
    yourNumber = parseInt(yourNumber) + parseInt(hiddenFour);
    $("#yourNumber").html(yourNumber);
    if (yourNumber === randomNumber) {
        win();
    }
    if (yourNumber > randomNumber) {
        lose();
    }
}

function win() {
    $("#alert").html("You Win!");
    wins++;
    $("#wins").html(wins);
    restart();
}

function lose() {
    $("#alert").html("You lose, dummy");
    losses++;
    $("#losses").html(losses);
    restart();
}

function restart() {
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#randomNumber").html(randomNumber);
    hiddenOne = Math.floor(Math.random() * (12 - 1) + 1);
    hiddenTwo = Math.floor(Math.random() * (12 - 1) + 1);
    hiddenThree = Math.floor(Math.random() * (12 - 1) + 1);
    hiddenFour = Math.floor(Math.random() * (12 - 1) + 1);
    yourNumber = 0;
    $("#yourNumber").html(yourNumber);
}
