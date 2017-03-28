// state

var state = {
  answeredWrong: [],
  currentQuestionSet: 0,
  questions: [
    {text: "In which city were the Jazz located before moving to Utah?", 
      choices: ["Memphis", "London", "New Orleans", "Seattle"], 
      correctAnswer: [2], 
      correctMessage: "Correct! The Jazz had to move out of New Orleans due to financial difficulties.", 
      wrongMessage: "Wrong. The Jazz had to leave New Orleans due to financial difficulties."}, 
    {text: "What year did the Utah Jazz move to Utah?", 
      choices: [1979, 1984,1989,1995], 
      correctAnswer: [0], 
      correctMessage: "Correct!", 
      wrongMessage: "Wrong."},
    {text: "What college did John Stockton attend?", 
      choices: ["St. Mary's", "Gonzaga", "Louisiana Tech", "BYU"], 
      correctAnswer: [1], 
      correctMessage: "Correct!", 
      wrongMessage: "Wrong."},
    {text: "On January 27th, 1990, after A. C. Green edged Karl Malone in the voting for all-star game power forward, the Mailman delivered 18 rebounds and a career high of how many points?", 
      choices: ["45 against the Lakers", "49 against the Warriors", "61 against the Bucks", "65 against MJ and the Bulls"], 
      correctAnswer: [2], 
      correctMessage: "Correct! *Note, that same night A.C. Green scored 11 points and grabbed 3 rebounds.", 
      wrongMessage: "Wrong."},
    {text: "Who did Jerry Sloan replace as the Jazz head coach?", 
      choices: ["Tom Nissalke", "Elgin Baylor", "Quinn Snyder", "Frank Layden"], 
      correctAnswer: [3], 
      correctMessage: "Correct! Frank Layden was an important foundation piece for the Utah Jazz that helped found a great community tradition of passion and love of the game. He coached a total of 571 games for the Utah Jazz and won coach of the year in 1984.", 
      wrongMessage: "Wrong."},
    {text: "Who is the greatest Jazz player of all time?", 
      choices: ["Karl Malone", "John Stockton", "Adrian Dantley", "Pete Maravich"], 
      correctAnswer: [0,1,2,3,], 
      correctMessage: "Yes, you are right.  This is an opinion question. So far, this is the opinion of all who have taken the quiz: ", 
      wrongMessage: "Wrong."},
    {text: "What arena do the Jazz call home?", 
      choices: ['The Salt Palace', 'The Delta Center','Energy Solutions Arena', 'Vivint Smart Home Arena'], 
      correctAnswer: [1], 
      correctMessage: "Correct! The home of the Utah Jazz will forever be the Delta Center.", 
      wrongMessage: "Wrong. The home of the Utah Jazz will forever be the Delta Center."},
    {text: "John Stockton is the all time leader in assists and steals.  Which current NBA player has the best chance of reaching and/or surpassing Stockton?", 
      choices: ["Chris Paul", "John Wall", "Lebron James", "Jason Kidd", "The records will never be broken"], 
      correctAnswer: [4], 
      correctMessage: "Correct! In his 12th season, Chris Paul is the leading active assist leader and 10th in the all-time assist leaderboard. If he stays in the league for 19 years as Stockton did, he’d have to average 13.4 assists over the next 7 years and 2.4 steals.  HIs season highs until this point in his career are 11.6 assists and 2.8 steals.", 
      wrongMessage: "Wrong.  This record will never be broken.  To give you perspective, consider the following facts of CP3. In his 12th season, Chris Paul is the leading active assist leader and 10th in the all-time assist leaderboard. If he stays in the league for 19 years as Stockton did, he’d have to average 13.4 assists over the next 7 years and 2.4 steals.  His season highs until this point in his career are 11.6 assists and 2.8 steals."},
    {text: "Of the following, which stat is most amazing?", 
      choices: ['Karl Malone is the second all-time scoring leader with 36,928 points', 'Karl Malone played 18 seasons for the Jazz and John Stockton played 19 seasons for the Jazz. Combined, they only missed 32 games during their time in Utah.', 'Jerry Sloan never won coach of the year despite leading the jazz to 15 straight playoff appearances despite beingon only one of 4 coaches with 15 or more seasons of a winning record.', 'Karl Malone and Diamond Dallas Page wrestled Dennis Rodman and Hulk Hogan in the best WCW wrestling match ever.'], 
      correctAnswer: [0,1,2,3,], 
      correctMessage: "Correct! This of course is an opinion question.  Here are the opinions of everyone that has taken the quiz:", 
      wrongMessage: "Wrong."},
    {text: "MJ pushed off.", 
      choices: ["True", "False"], 
      correctAnswer: [0], 
      correctMessage: "Correct! Everyone knows he pushed off! The greatest player always found a way to win.", 
      wrongMessage: "Wrong. Come on, you know he pushed off!"},
  ]
}

var quizNode2 = 
    "<div>" +
      "<div id='thefirstone' class='row display-4'>" +
        "<div id='question' class='col-md-12 text-center well'>Question</div>" +
      "</div>" +
      "<div class='row'>" +
        "<div class='col-md-12 question-block'>" +
          "<div class='row'>" +
            "<div class='col-md-8 offset-md-2 text-center '>" +
              "<ul class='list-unstyled js-question-set'>" +
                
              "</ul>" +
            "</div>" +
            "<div class='col-md-8 offset-md-2 text-center'>" +
              "<div class='js-correct-info text-left'>" +
              "</div>" +
            "</div>" +
            "<div class='col-md-8 offset-md-2 text-center'>" +
              "<div>" +
                "<ul class='pagination justify-content-center'>" +
                  "<li class='page-item prev-button'><a class='page-link' >Previous</a></li>" +
                  "<li class='page-item next-button'><a class='page-link' >Next</a></li>" +
                "</ul>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>"
var button = "<li>" +
                "<button class='btn btn-secondary btn-block js-button js-wrong-button'>button option</button>" +
              "</li>"
            
var resultsNode =  
    "<div>" +
      "<div class='row'>" +
        "<div class='col-md-12 text-center '>" +
          "<h1 class='display-2'>Test Scores</h1>" +
          "<h3 class='results-message text-center'>Congratulations you scored 80%</h3>" +
          "<div class='row'>" +
            "<div class='col-md-8 offset-md-2 text-left'>" +
              "<ul ='pagination'>" +
                "<h4 class='wrong-list'>The questions you missed:</h4>" +
                
              "</ul>" +
            "</div>" +
          "</div>" +

        "</div>" +
        "" +
      "</div>" +
    "</div>"
var questionsMissedNode = 
  "<li class='list-group-item'>" +
    "<p class='question-missed'>Question:</p>" +
    "<p class='missed-answer'>Answer:</p>" + 
  "</li>"
// state manipulation

// DOM render functions

function renderCorrectMessage(thisValueSaved) {
  // console.log('renderCorrectMessage')
  var correctMessageHTML = $('<p id="correct-message">Correct Message</p>');
  var correctMessageText = state.questions[state.currentQuestionSet].correctMessage;
  $(thisValueSaved).closest('.question-block').find('.js-correct-info').html(correctMessageHTML);
  $(thisValueSaved).closest('.question-block').find('#correct-message').text(correctMessageText)
}

function renderWrongMessage(thisValueSaved) {
  // console.log('renderWrongMessage')
  var wrongMessageHTML = $('<p id="wrong-message">WrongMessage</p>');
  var wrongMessageText = state.questions[state.currentQuestionSet].wrongMessage
  // console.log(wrongMessageText)
  $(thisValueSaved).closest('.question-block').find('.js-correct-info').html(wrongMessageHTML);
  // $(this).parent('.js-question-set').removeClass('js-wrong-button')
  $(thisValueSaved).closest('.question-block').find('#wrong-message').text(wrongMessageText)
  // console.log($('.js-button'))
  $('.js-button').removeClass('active')
  $(thisValueSaved).addClass('active')
    
}

function renderQuestion(currentQuestionSet) {
  var div = $(quizNode2)
  var quizQuestion = div.find("#question")
  // console.log(quizQuestion);
  
  quizQuestion.text(state.questions[state.currentQuestionSet].text)
  
  
  for(var i = 0; i < state.questions[state.currentQuestionSet].choices.length; i++) {
    var choicesLoop = state.questions[state.currentQuestionSet].choices[i]

    var b = $(button) 
    if(i === state.questions[state.currentQuestionSet].correctAnswer[0] || i === state.questions[state.currentQuestionSet].correctAnswer[1] || i === state.questions[state.currentQuestionSet].correctAnswer[2] || i === state.questions[state.currentQuestionSet].correctAnswer[3] ) {
      b.find('button').removeClass('js-wrong-button')
      b.find('button').addClass('js-correct-button')
    }


    b.find('button').text(choicesLoop)
    b.find('button').attr('data-asdf', 'blerg')
    // $(button).text('asdf')
    div.find('.js-question-set').append(b)
    // console.log(div)  

  }
  $('.quiz-node').html(div)
}

function renderTestResults(answeredWrong) {
  var finalScore = 100 - (state.answeredWrong.length/state.questions.length * 100)
  // console.log(finalScore)
  var divScores = $(resultsNode);
  var scoreMessage = divScores.find('.results-message')
  if(finalScore >= 60) {
    scoreMessage.text("Congratulations, you are a real Jazz fan! You scored " + 
    finalScore + "%!")  
  }
  else {
    scoreMessage.text("You call yourself a Jazz fan?  You probably don't even know who Larry H. Miller is.  You need to start studying your history.  Your quiz score was a measley " + 
    finalScore + "%!")
  }
  
  for(var i = 0; i < state.answeredWrong.length; i++) {
    var questions = state.questions[state.answeredWrong[i]].text
    var answers = state.questions[state.answeredWrong[i]].choices[state.questions[state.answeredWrong[i]].correctAnswer];
    console.log(questions, answers);
    var listItem = $(questionsMissedNode)
    listItem.find('.question-missed').text("Question: " + questions)
    listItem.find('.missed-answer').text("Answer: " + answers)
    
    divScores.find('.wrong-list').append(listItem)
  }


  

  $('.quiz-node').html(divScores)
}



// event handlers

function handleCorrectClick() {
  // console.log('hello')
  $('.quiz-node').on('click', '.js-correct-button', function() {
    // console.log('click')
    // console.log($(this))
    // console.log($(this).closest('.question-block'))
    // console.log($('.js-correct-button'))
    $('.js-button').removeClass('active')
    $('.js-correct-button').addClass('active')
    var thisValueSaved = $(this) 
    var currentQuestionSet = state.currentQuestionSet;   
    renderCorrectMessage(thisValueSaved, currentQuestionSet)
  })
}

function handleWrongClick() {
  // console.log('hello')
  $('.quiz-node').on('click', '.js-wrong-button', function() {
    // console.log('click')
    var thisValueSaved = $(this)
    renderWrongMessage(thisValueSaved)
    state.answeredWrong.push(state.currentQuestionSet);
    console.log(state.answeredWrong);
  })
}

function handleNextClick() {

  $('.quiz-node').on('click', '.next-button', function() {
    if(state.currentQuestionSet >= 9) {
      renderTestResults(state.answeredWrong)
    }
    state.currentQuestionSet++;
    // console.log(state.currentQuestionSet);
    renderQuestion(state.currentQuestionSet);
    // handleNextClick();
  })

  // $(".next-button").on('click', function() {
  //   console.log('itclicked');
  //   renderQuestion();
  //   // handleNextClick();
  // })
}

function handlePreviousClick() {
  $('.quiz-node').on('click', '.prev-button', function() {
    // console.log('prevclick');
    if(state.currentQuestionSet === 0) {
      alert("You are currently at the first question of the quiz. Good luck!")
      return
    }
    
    state.currentQuestionSet--;
    renderQuestion(state.currentQuestionSet);
    // console.log(state.currentQuestionSet)
    // handleNextClick();
  })
}

$(function() {

  renderQuestion(state.currentQuestionSet);
  // currentQuestionSet++;
  handleCorrectClick();
  handleWrongClick();
  handleNextClick();
  handlePreviousClick();
})