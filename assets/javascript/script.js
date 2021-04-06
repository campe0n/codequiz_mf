var body = document.body;
var leaderboard = document.getElementById("vh");
var timeEl = document.getElementById("time");
var startDeck = document.querySelector("section");
var startHeader = document.querySelector("h1");
var startText = document.getElementById("cardtxt");
var startBtn = document.getElementById("startButton");

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
    startBtn.remove();
    startDeck.setAttribute("style", "display: flex; justify-content: flex-start;")
    let h2 = document.createElement("h1");
    let q1 = document.createTextNode('what does the "api" in web api mean?');
    let question1 = h2.appendChild(q1);
    startHeader.replaceWith(question1);

    let q1btn1 = document.createElement("button");
    q1btn1.innerHTML = "automating program intializer";
    document.body.children[1].children[0].appendChild(q1btn1);
    let q1btn2 = document.createElement("button");
    q1btn2.innerHTML = "automatic program interface";
    document.body.children[1].children[0].appendChild(q1btn2);
    let q1btn3 = document.createElement("button");
    q1btn3.innerHTML = "application programming interface";
    document.body.children[1].children[0].appendChild(q1btn3);
    let q1btn4 = document.createElement("button");
    q1btn4.innerHTML = "application program iterator";
    document.body.children[1].children[0].appendChild(q1btn4);

    document.body.children[1].children[0].children[2].addEventListener("click", function() {
      let h3 = document.createElement("h1");
      let q2 = document.createTextNode('Which answer is not a primitive data type?');
      let question2 = h3.appendChild(q2);
      startHeader.replaceWith(question2);

      let q2btn1 = document.createElement("button");
      q2btn1.innerHTML = "boolean";
      document.body.children[1].children[0].appendChild(q2btn1);
      let q2btn2 = document.createElement("button");
      q2btn2.innerHTML = "array";
      document.body.children[1].children[0].appendChild(q2btn2);
      let q2btn3 = document.createElement("button");
      q2btn3.innerHTML = "int";
      document.body.children[1].children[0].appendChild(q2btn3);
      let q2btn4 = document.createElement("button");
      q2btn4.innerHTML = "double";
      document.body.children[1].children[0].appendChild(q2btn4);

      q1btn1.replaceWith(q2btn1);
      q1btn2.replaceWith(q2btn2);
      q1btn3.replaceWith(q2btn3);
      q1btn4.replaceWith(q2btn4);
    });
  }

  
