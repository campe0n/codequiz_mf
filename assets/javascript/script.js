var body = document.body;
var leaderboard = document.getElementById("vh")
var timeEl = document.getElementById("time")
var deck = document.querySelector("section")
var header = document.querySelector("h1")
var text = document.getElementById("cardtxt")
var button = document.querySelector("button")

var secondsLeft = 10;

function setTime() {
  if (secondsLeft === 0) secondsLeft = 10;
  timeEl.setAttribute("style", "opacity: 1;")
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent ="Time: " + secondsLeft;

      if (secondsLeft === 0) {
        alert("Game Over");
        clearInterval(timerInterval);
        timeEl.setAttribute("style", "opacity: 0;");
        return;
      }
    }, 1000)
    return;
  }

  function setDeck() {
    button.remove();
    header.remove();
    text.remove();
  }
