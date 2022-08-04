var introEl= document.querySelector("#intro")
var qaViewEl= document.querySelector("#qa-view")
var timerEl= document.querySelector("#time")
var titleEl= document.querySelector("#title")
var answer1El= document.querySelector("#answer1")
var answer2El= document.querySelector("#answer2")
var answer3El= document.querySelector("#answer3")
var answer4El= document.querySelector("#answer4")
var startQuizBtn =  document.querySelector("#start-quiz")
var saveBtn =  document.querySelector("#save")
var initalEL = document.querySelector("#inital")
var inputeEl = document.querySelector("#input-init")

/*
Step 1: display start page including title, start button and paragraph - start button will trigger quiz game and display timer and questions

Step 2 : timer will start when the start button clicked from start page, display question with 4 mulitple choices questions including buttons. Once start button is press main page hide only show questions. Eash question will have 15 seconds.  when clicked answer will show correct/wrong message.  if wrong answer selected, 15 seconds will be taken away from timer.

Step 3: Once all questions answer, input needed from user for initial with submit button. timer stop and time left will be the score of the quiz.when you click the submit if initialm it store scroew in local storage.

Step 4: show dashboard of all high score
 */

var timeRemaining=75 
var clockid

const question=[{
titles:"In JavaScript, what element is used to store multiple values in a single variable?",
answers:["Strings","Functions","Arrays","Variables"],
solution: "Arrays"

},{

    titles:"What is the format called that used for storing and transporting data?",
answers:["HTML","Syntax","JSON","Font"],
solution: "JSON"
},{

    titles:"What elemets are used to test for True or False values stored in variables?",
answers:["Trigger readers","Regular Expressions","Comparison and logical operators","Conditional statement"],
solution: "Comparison and logical operators"
},{

    titles:"What is considered to be the most popular programming language in the world?",
answers:["HTML","Swift","JavaScript","Ruby"],
solution: "JavaScript"
},{

    titles:"In JavaScript, what is a block of code called that is used to perform a specific task?",
answers:["String","Variable","Declaration","Function"],
solution: "Function"
}]

var answeredEL = ["solution"]

var index=0

function countDown(){
    timerEl.textContent=timeRemaining
     timeRemaining--
}

function startGame(){
    qaViewEl.classList.remove("hide")
    introEl.classList.add("hide")
    clockid=setInterval(countDown,1000)
    displayQuestions()
}

function displayQuestions(){
    titleEl.textContent=question[index].titles
    answer1El.textContent=question[index].answers[0]
     answer2El.textContent=question[index].answers[1]
     answer3El.textContent=question[index].answers[2]
     answer4El.textContent=question[index].answers[3]
}




function nextQuestion()

// if (index = 0;  index <index.length; index++ ){
//     displaySolution
// displayQuestions()} 
// else {function input(initalEL)}

{
    document.querySelector(".solution").textContent=question[index].solution
   console.log (question[index].solution)
    if(index >= question.length-1){
        //game over
        endOfGame ()
    }
    else {
        index++
        displayQuestions()
    }
   
}




    
function endOfGame () {
    clearInterval (clockid)

    countDown.innerHTML="Finished"
    timer = 75
    score = 0
    clearQuestion()
}

function clearQuestion() {
    qaViewEl.classList.add("hide")
    introEl.classList.remove("hide")
    inputeEl.classList.remove("hide")
    
}
function saveScore ()
{
    var initial = document.querySelector("#enter-init").value 
    var score =timerEl.textContent
    localStorage.setItem("highScore", initial + " " + score)
    var scoreDash = document.querySelector("#dashboard")
    scoreDash.classList.remove("hide")
    inputeEl.classList.add("hide")
    startQuizBtn.classList.add("hide")
    var newHighscore = document.querySelector ("#newHighscore")
    newHighscore.textContent= localStorage.getItem("highScore")


}


answer1El.addEventListener("click",nextQuestion)
answer2El.addEventListener("click",nextQuestion)
answer3El.addEventListener("click",nextQuestion)
answer4El.addEventListener("click",nextQuestion)



startQuizBtn.addEventListener("click",startGame)
saveBtn.addEventListener("click",saveScore)
