var timeEl = document.getElementById("time")
var deck = document.querySelector("section")

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

