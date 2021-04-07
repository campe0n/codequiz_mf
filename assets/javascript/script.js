var body = document.body;
var leaderboard = document.getElementById("vh");
var timeEl = document.getElementById("time");
var startDeck = document.querySelector("section");
var startHeader = document.querySelector("h1");
var startText = document.getElementById("cardtxt");
var startBtn = document.getElementById("startButton");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

var secondsLeft = 120;
var score = 0;

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
    startBtn.remove();

    b1.setAttribute("style", "opacity: 1;")
    b2.setAttribute("style", "opacity: 1;")
    b3.setAttribute("style", "opacity: 1;")
    b4.setAttribute("style", "opacity: 1;")

    let h2 = document.createElement("H1");
    let q1 = document.createTextNode('what does the "api" in web api mean?');
    let question1 = h2.appendChild(q1);
    startHeader.replaceWith(question1);

    let a1 = document.createTextNode("automating programming interface");
    b1.appendChild(a1);
    let a2 = document.createTextNode("automatic program interface")
    b2.appendChild(a2);
    let a3 = document.createTextNode("application programming interface")
    b3.appendChild(a3);
    let a4 = document.createTextNode("application program interface")
    b4.appendChild(a4);

    b3.addEventListener('click', function() {
      score = score + 10;
      question1.nodeValue = "what does mkdir do in the gitbash terminal?"
      a1.nodeValue="makes a file"
      a2.nodeValue="removes a file"
      a3.nodeValue="makes a directory"
      a4.nodeValue="makes a dir element"

      b3.addEventListener('click', function() {
        score = score + 10;
        question1.nodeValue = "what does DOM stand for?"
        a1.nodeValue="Document Object Model"
        a2.nodeValue="Do only mode"
        a3.nodeValue="DOM doesn't stand for anything"
        a4.nodeValue="document object mode"

        b1.addEventListener('click', function() {
          score = score + 10;
          question1.nodeValue = "data stored within a local storage is always a _____?"
          a1.nodeValue="number"
          a2.nodeValue="float"
          a3.nodeValue="parseFloat();"
          a4.nodeValue="string"

          b4.addEventListener('click', function() {
            score = score + 10;
            b1.remove();
            b2.remove();
            b3.remove();
            b4.remove();
            question1.nodeValue="Your Score"
            var scoreText = document.createElement('H1');
            var scoreTextNode = document.createTextNode(score);
            scoreText.appendChild(scoreTextNode);
            body.appendChild(scoreText)
          })
        })
      })
    })
    };
  

  
