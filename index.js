var hold = Math.random();
hold = Math.floor(hold * 6);
hold = hold + 1;

// random1 = "images/dice" + hold +".png";
// document.querySelector(".img1").setAttribute("src", random1);
if (hold == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (hold == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (hold == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (hold == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (hold == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (hold == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var sold = Math.random();
sold = Math.floor(sold * 6);
sold = sold + 1;

if (sold == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (sold == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (sold == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (sold == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (sold == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (sold == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (sold > hold) {
  document.querySelector("h1").innerHTML = "Player 2 Wins"
} else if (sold < hold) {
  document.querySelector("h1").innerHTML = "Player 1 Wins"
} else {
  document.querySelector("h1").innerHTML = "Draw, Roll again"
}
