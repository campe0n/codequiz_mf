var body = document.body;
var leaderboard = document.getElementById("vh")
var timeEl = document.getElementById("time")
var startDeck = document.querySelector("section")
var startHeader = document.querySelector("h1")
var startText = document.getElementById("cardtxt")
var startButton = document.querySelector("button")

var secondsLeft = 120;

function setTime() {
  if (secondsLeft === 0) secondsLeft = 120;
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
    startText.remove();
    startButton.remove();
    let h2 = document.createElement("h1");
    let question = document.createTextNode('what does the "api" in web api mean?');
    let question1 = h2.appendChild(question);
    startHeader.replaceWith(question1);

    let bttn1 = document.createElement("button");
    bttn1.innerHTML = "automating program intializer";
    document.body.children[1].children[0].appendChild(bttn1);
    let bttn2 = document.createElement("button");
    bttn2.innerHTML = "automatic program interface";
    document.body.children[1].children[0].appendChild(bttn2);
    let bttn3 = document.createElement("button");
    bttn3.innerHTML = "application programming interface";
    document.body.children[1].children[0].appendChild(bttn3);
    let bttn4 = document.createElement("button");
    bttn4.innerHTML = "application program iterator";
    document.body.children[1].children[0].appendChild(bttn4);
  }
