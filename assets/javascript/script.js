var timeEl = document.querySelector(".time");
var gameState = 0;

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = secondsLeft;
  }
  

  