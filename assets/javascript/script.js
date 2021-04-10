var body = document.body;
var leaderboard = document.getElementById("vh");
var timeEl = document.getElementById("time");
var startDeck = document.querySelector("section");
var startHeader = document.querySelector("h1");
var h2 = document.querySelector("h2");
var startText = document.getElementById("cardtxt");
var startBtn = document.getElementById("startButton");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var userInput = document.getElementById("playerinits");
var submitBtn = document.getElementById('submitBtn');
var storedInput = localStorage.getItem('saveInput');
var ol = document.querySelector('ol');
var li = document.querySelector('li');

var secondsLeft = 0;
var score = 0;
var timerInterval = undefined;

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
      }
    }, 1000)
    return;
  }

function wrongAnswer() {
  score = score - 10;
  secondsLeft = secondsLeft - 10;
  if (secondsLeft < 10) {
    alert('Game Over')
    clearInterval(timerInterval);
    timeEl.setAttribute("style", "opacity: 0;");
    return;
  }
}

function setDeck() {
  startText.remove();
  startBtn.remove();

  b1.setAttribute("style", "opacity: 1;")
  b2.setAttribute("style", "opacity: 1;")
  b3.setAttribute("style", "opacity: 1;")
  b4.setAttribute("style", "opacity: 1;")

  let question = document.createElement("H1");
  let qText = document.createTextNode('What does the "api" in web api mean?');
  question.appendChild(qText);
  document.body.appendChild(question);
  startHeader.replaceWith(question);

  let a1 = document.createTextNode("automating programming interface");
  b1.appendChild(a1);
  let a2 = document.createTextNode("automatic program interface")
  b2.appendChild(a2);
  let a3 = document.createTextNode("application programming interface")
  b3.appendChild(a3);
  let a4 = document.createTextNode("application program interface")
  b4.appendChild(a4);

  b1.addEventListener('click', function() {wrongAnswer();});
  b2.addEventListener('click', function() {wrongAnswer();});
  b4.addEventListener('click', function() {wrongAnswer();});
  b3.addEventListener('click', function() {
    score = score + 20;
    qText.nodeValue = "What does mkdir do in the gitbash terminal?"
    a1.nodeValue="makes a file"
    a2.nodeValue="removes a file"
    a3.nodeValue="makes a directory"
    a4.nodeValue="makes a dir element"

    b1.addEventListener('click', function() {wrongAnswer();});
    b2.addEventListener('click', function() {wrongAnswer();});
    b4.addEventListener('click', function() {wrongAnswer();});
    b3.addEventListener('click', function() {
      score = score + 20;
      qText.nodeValue = "What does DOM stand for?"
      a1.nodeValue="Document Object Model"
      a2.nodeValue="Do only mode"
      a3.nodeValue="DOM doesn't stand for anything"
      a4.nodeValue="document object mode"

      b3.addEventListener('click', function() {wrongAnswer();});
      b2.addEventListener('click', function() {wrongAnswer();});
      b4.addEventListener('click', function() {wrongAnswer();});
      b1.addEventListener('click', function() {
        score = score + 20;
        qText.nodeValue = "Data stored within a local storage is always a _____?"
        a1.nodeValue="number"
        a2.nodeValue="float"
        a3.nodeValue="parseFloat();"
        a4.nodeValue="string"

        b1.addEventListener('click', function() {wrongAnswer();});
        b2.addEventListener('click', function() {wrongAnswer();});
        b3.addEventListener('click', function() {wrongAnswer();});
        b4.addEventListener('click', function() {
            score = score + 20;
            b1.remove();
            b2.remove();
            b3.remove();
            b4.remove();
           
            submitBtn.setAttribute('style', 'width: 25%; margin: 2%;');
            userInput.setAttribute('style', 'opacity:1;');
            h2.setAttribute('style', 'opacity:1;')
            timeEl.remove();
            qText.nodeValue= 'Your Score: ' + score
            question.setAttribute('style', 'font-size: 40px; font-weight: bold; display: flex; justify-content:center; margin-bottom:2%;');
            submitBtn.setAttribute('style','opacity:1; margin:2%;')

            submitBtn.addEventListener('click', function() {  
              var input = document.getElementById('playerinits').value;
              localStorage.setItem("saveInput", input)
              
              localStorage.getItem('saveInput')
              var li = document.createElement('li')
              li.textContent = input + "  " + score;
              ol.appendChild(li); 
              localStorage.setItem('saveInput', input)
   
              console.log(input);
            });
          })
        })
      })
    })
    };
  