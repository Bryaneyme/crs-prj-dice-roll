// define random number from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// show die on screen
document.querySelector("#img1").setAttribute("src", `/images/dice${randomNumber1}.png`) // set image 1
document.querySelector("#img2").setAttribute("src", `/images/dice${randomNumber2}.png`) // set image 2

// compare which one is bigger, and determine who wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!!!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!!!"
}
else {
    document.querySelector("h1").textContent = "Draw... Try again :)"
}