// FOR LEFT DICE 

var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

//FOR RIGHT DICE

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//FOR GAMING RESEULT
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎆🎆 Player 1 Win ✨✨";
} else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "🎉🎉 Player 2 Win 🎇🎇";
} else {
    document.querySelector("h1").innerHTML = "🎭 Draw 🎭";
}