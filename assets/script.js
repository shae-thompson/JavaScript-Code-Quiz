var startQuiz = document.querySelector("#startBtn");

startBtn.addEventListener("click", function() {
  var secondsLeft = 75;

  function setTime() {
    var timerInterval = setInterval(function() {
     secondsLeft--;
      document.getElementById('main').innerHTML = secondsLeft + ' seconds left!';

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        document.getElementById('main').innerHTML = 'Times Up!';
      }
    }, 1000);
}

setTime();

  var question1 = { 
    answers1: ['JavaScript', 'Termianl/Bash', 'For Loops', 'console.log'],
    correctAnswer: 3,
   };
 
 
 var ans = document.querySelectorAll('.answers1');
 ans.forEach(function(element, index){
   element.textContent = question1.answers1[index]; 
 
   element.addEventListener('click', function(){
     if(question1.correctAnswer == index) {
       console.log('Correct Answer!');
     } 
     else {
       console.log('Wrong Answer!');
       secondsLeft -=5;
     }
   });
 });
 
 var question2 = { 
   answers2: ['Quotes ""', 'Curly Brackets {}', 'Parentheses ()', 'Square Brackets []'],
   correctAnswer2: 2,
  };
 
 
 var ans2 = document.querySelectorAll('.answers2');
 ans2.forEach(function(element, index){
  element.textContent = question2.answers2[index]; 
 
  element.addEventListener('click', function(){
    if(question2.correctAnswer2 == index) {
      console.log('Correct Answer!');
    } 
    else {
      console.log('Wrong Answer!');
      secondsLeft -=5;
    }
  });
 });
 
 var question3 = { 
   answers3: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
   correctAnswer3: 3,
  };
 
 
 var ans3 = document.querySelectorAll('.answers3');
 ans3.forEach(function(element, index){
  element.textContent = question3.answers3[index]; 
 
  element.addEventListener('click', function(){
    if(question3.correctAnswer3 == index) {
      console.log('Correct Answer!');
    } 
    else {
      console.log('Wrong Answer!');
      secondsLeft -=5;
    }
  });
 });
 
 var question4 = { 
   answers4: ['Commas ,,', 'Curly Brackets {}', 'Quotes ""', 'Parentheses ()'],
   correctAnswer4: 3,
  };
 
 
 var ans4 = document.querySelectorAll('.answers4');
 ans4.forEach(function(element, index){
  element.textContent = question4.answers4[index]; 
 
  element.addEventListener('click', function(){
    if(question4.correctAnswer4 == index) {
      console.log('Correct Answer!');
    } 
    else {
      console.log('Wrong Answer!');
      secondsLeft -=5;
    }
  });
 });
 
 var question5 = { 
   answers5: ['Strings', 'Numbers', 'Booleans', 'Alerts'],
   correctAnswer5: 3,
  };
 
 
 var ans5 = document.querySelectorAll('.answers5');
 var outcome5 = document.querySelectorAll('.outcome5');
 ans5.forEach(function(element, index){
  element.textContent = question5.answers5[index]; 
 
  element.addEventListener('click', function(){
    if(question5.correctAnswer5 == index) {
      console.log('Correct Answer!');
    } 
    else {
      console.log('Wrong Answer!');
      secondsLeft -=5;
    }
  });
 });

})

var initialInput = document.querySelector("#initials");
var scoreTracker = document.querySelector("#scoreTracker");

var scores = [];

function renderScpre() {
  scoreList.innerHTML = "";
  for (var i = 0; i < scores.length; i++) {
    var todo = scores[i];

    var li = document.createElement("li");
    li.textContent = scores;
    li.setAttribute("data-index", i);

    var buttonScore = document.createElement("buttonScore");
    buttonScore.textContent = "Complete ✔️";

    li.appendChild(buttonScore);
    scoreList.appendChild(li);
  }
}