$(document).ready(function () {
    //the game object
    var triviaData = {
        questionBank: [{
            question: "Who kills Agent Phil Coulson in the movie The Avengers?",
            answerChoices: ["Loki", "Thor", "Nick", "Hulk"],
            answer: "Loki",
            imageSource: "q1"
        }, {
            question: "Which of the Avengers saves all of Manhattan from the active missile?",
            answerChoices: ["Thor", "Black Widow", "Iron Man", "Captian America"],
            answerIndex: "Iron Man",
            imageSource: "q2"
        }, {
            question: "What is the name of Odin’s first child – the Goddess of Death?",
            answerChoices: ["Helena", "Rona", "Lana", "Hela"],
            answerIndex: "Hela",
            imageSource: "q3"
        }, {
            question: "Where did Loki send his father while he impersonated him back in Asgard?",
            answerChoices: ["Alaska", "Norway", "Canada", "Iceland"],
            answerIndex: "Norway",
            imageSource: "q4"
        }, {
            question: "Which of the Avengers is left half-paralyzed after the airport fight in Captain America: Civil War?",
            answerChoices: ["Scarlet Witch", "Iron Man", "Rhodey", "Ant-Man"],
            answerIndex: "Rhodey",
            imageSource: "q5"
        }, {
            question: "What is the name of the agreement the United Nations forced the Avengers to sign?",
            answerChoices: ["Sokovia Accords", "Sokovia Agreement", "Sokovia Law", "Sokovia Document"],
            answerIndex: "Sokovia Accords",
            imageSource: "q6"
        }, {
            question: "Who was responsible for the experiments that gave Wanda and Pietro their superhuman abilities?",
            answerChoices: ["Vision", "Strucker", "Steve Rogers", "Nick Fury"],
            answerIndex: "Strucker",
            imageSource: "q7"
        }, {
            question: "Which of the Infinity Stones is embedded in Vision’s forehead?",
            answerChoices: ["Life Stone", "Death Stone", "Earth Stone", "Mind Stone"],
            answerIndex: "Mind Stone",
            imageSource: "q8"
        }, {
            question: "Who is Peter Parker’s best friend in Spider-Man: Homecoming?",
            answerChoices: ["Ned", "Fred", "Michael", "James"],
            answerIndex: "Ned",
            imageSource: "q9"
        }, {
            question: "How does Peter end up getting a ride to Washington, D.C to track down Schultz?",
            answerChoices: ["Borrows tony Stark's Car", "Rejoins his academic decathlon team", "Steals money from aunt May", "Takes a train"],
            answerIndex: "Rejoins his academic decathlon team",
            imageSource: "q10"
        }, {
            question: "What suit is Pym’s daughter Van Dyne hinted to wear at the end of the film?",
            answerChoices: ["Wasp", "Bee", "Yellowjacket", "Hornet"],
            answerIndex: "Wasp",
            imageSource: "q11"
        }, {
            question: "What is the name of the prison that Peter, Rocket, Gamora and Groot were detained to?",
            answerChoices: ["Killer", "Death Prison", "Death Wish", "Kyln"],
            answerIndex: "Kyln",
            imageSource: "q13"
        }, {
            question: "Who sacrifices themselves to save the rest of the guardians from their spaceship crash?",
            answerChoices: ["Rocket", "Groot", "Gamora", "Peter"],
            answerIndex: "Groot",
            imageSource: "q14"
        }, {
            question: "What do Rogers and Romanoff find at the location the flash drive sent them?",
            answerChoices: ["Bucky's dead body", "Tony Stark locked up", "Zola's consciousness", "Files on Steve"],
            answerIndex: "Zola's consciousness",
            imageSource: "q15"
        }, {
            question: "How does Fury supposedly die in Captain America: The Winter Soldier?",
            answerChoices: ["The Winter Soldier Assassinates him", "Poisoned", "Falls out of a helicopter", "Drowns"],
            answerIndex: "The Winter Soldier Assassinates him",
            imageSource: "q16"
        }, {
            question: "What is the alignment of the Nine Realms referred to as?",
            answerChoices: ["The Alignment", "The Line", "The Rebirth", "The Convergence"],
            answerIndex: "The Convergence",
            imageSource: "q17"
        }, {
            question: "Who does Volstagg and Sif entrust the Aether to at the end of Thor: The Dark World?",
            answerChoices: ["The Gifter", "The Collector", "The Antiquer", "The Man"],
            answerIndex: "The Collector",
            imageSource: "q18"
        }, {
            question: "What is the name of the boy who helps Tony repair his broken suit in Iron Man 3?",
            answerChoices: ["Harry", "Jasper", "Harley", "Jake"],
            answerIndex: "Harley",
            imageSource: "q19"
        }, {
            question: "How does Tony manage to save all of the passengers from Air Force One after the plane is compromised?",
            answerChoices: ["Getting them to join hands in the free fall", "With the help of the Avengers", "Landing the Plane", "Dropping them in a net"],
            answerIndex: "Getting them to join hands in the free fall",
            imageSource: "q20"
        }, {
            question: "Which of Yondu’s men turn on him after he hesitates on handing over his adopted son, Peter?",
            answerChoices: ["Razorface", "Taserface", "Deathface", "Killerface"],
            answerIndex: "Taserface",
            imageSource: "q21"
        }, {
            question: "What is the name of Ego’s servant who has the ability to feel someone’s emotions by touching them?",
            answerChoices: ["Marleen", "Juniper", "Fray", "Mantis"],
            answerIndex: "Mantis",
            imageSource: "q22"
        }, {
            question: "Which one of the dimensions does the Ancient One show Doctor Strange to practice his magic safely?",
            answerChoices: ["The Mirror Dimension", "The Future Dimension", "The Reality Dimension", "The Illusion Dimension"],
            answerIndex: "The Mirror Dimension",
            imageSource: "q23"
        }, {
            question: "Which Sanctum is the last to be attacked in Doctor Strange?",
            answerChoices: ["London", "New York", "Hong Kong", "Alaska"],
            answerIndex: "Hong Kong",
            imageSource: "q24"
        }, {
            question: "In X-Men: Days of Future Past, what year does Kitty send Wolverine’s consciousness back to?",
            answerChoices: ["1953", "1973", "1960", "1980"],
            answerIndex: "1973",
            imageSource: "q25"
        }, {
            question: "Whose DNA are the mutant hunting robots known as “Sentinels” based off of?",
            answerChoices: ["Charles", "Magneto", "Wolverine", "Mystique"],
            answerIndex: "Mystique",
            imageSource: "q26"
        }, {
            question: "Why does Wade Wilson initially leave his fiancé Vanessa?",
            answerChoices: ["He's dying of cancer", "Found another woman", "Kidnapped", "Relocated for work"],
            answerIndex: "He's dying of cancer",
            imageSource: "q27"
        }, {
            question: "Who is Wade’s best friend?",
            answerChoices: ["Musktrat", "Timone", "Weasel", "Beaver"],
            answerIndex: "Weasel",
            imageSource: "q28"
        }, {
            question: "Who is Erik Lehnsherr’s biological son?",
            answerChoices: ["Magneto Jr", "Quicksilver", "Beast", "Death Metal"],
            answerIndex: "Quicksilver",
            imageSource: "q29"
        }, {
            question: "What is the name of the device that Xavier uses to locate other mutants?",
            answerChoices: ["Cerebellum", "Brain Scan", "cerebella", "cerebro"],
            answerIndex: "cerebro",
            imageSource: "q30"
        }],
        currentQuestionNumber: 0,
        currentAnswer: "",
        quiz: [], //array of number that would create questions.
        quizSize: 10,
        allotedTime: 15,//you have 15 seconds to answer
        hasUserAnswered: false,
        theAnsUserSelected: "",
        numberOfCorrectAnswers: 0,
        theCorrectAnswer: "",
        numberOfIncorrectAnswers: 0,
        numberOfUnanswered: 0,
        timer: 0,
        messages: {
            correct: "That's correct",
            incorrect: "That is incorrect!",
            outOfTime: "You ran out of time.",
            quizCompleted: "Quiz is completed"
        }
    }

    function resetGame() {
        triviaData.currentQuestionNumber = 0;
        triviaData.currentAnswer = "";
        triviaData.quiz = [], //array of number that would create questions.
        triviaData.quizSize = 10,
        triviaData.hasUserAnswered = false;
        triviaData.theAnsUserSelected = "";
        triviaData.numberOfCorrectAnswers = 0;
        triviaData.theCorrectAnswer = "";
        triviaData.numberOfIncorrectAnswers = 0;
        triviaData.numberOfUnanswered = 0;
        triviaData.timer = 0;
    }

    $("#startBtn").on("click", function () {
        $("#restartBtn").hide();
        startGame();
    });
    $("#restartBtn").on("click", function () {
        startGame();
    });

    function startGame() {
        resetGame();
        teadDownScoreBoardPage();
        buildQuestionPage();
        createQuiz();
        questionPage();
    }

    //start serving questions on the question page
    //Pre-condition: question page is built right before this function is called
    function questionPage() {
        tearDownAnswerPage();
        var placeToFindQuestions = triviaData.questionBank[triviaData.quiz[triviaData.currentQuestionNumber]];
        $("#questionNumber").html("Question #" + (triviaData.currentQuestionNumber) + "/" + triviaData.quiz.length);
        let questionTextFromArray = placeToFindQuestions.question;
        triviaData.theCorrectAnswer = placeToFindQuestions.answerIndex;
        let imageSourceString = "../assets/images/" + placeToFindQuestions.imageSource + ".jpg";
        console.log(imageSourceString);
        $("#image").html('<img src = "./assets/images/' + placeToFindQuestions.imageSource + '.jpg" width = "400px">');

        $("#questionText").html("<h2>" + questionTextFromArray + "</h2>");
        for (let i = 0; i < 4; i++) {
            let choices = $('<div>');
            let answerString = placeToFindQuestions.answerChoices[i];
            choices.text(answerString);
            choices.attr({ "data-index": i });
            choices.addClass("multipleChoice");
            $("#multiple-answers").append(choices);
        }
        countDown();
        $(".multipleChoice").on("click", function () {
            triviaData.theAnsUserSelected = placeToFindQuestions.answerChoices[$(this).data("index")];
            clearInterval(triviaData.timer);
            answerPage();
        });

        //triviaData.currentQuestionNumber++;
    }

    //next two function is where all the timing magic happens
    function countDown() {
        triviaData.allotedTime = 15;//you have 15 seconds to answer
        $("#timeLeft").html("<h3>Time remaining: " + triviaData.allotedTime + " Seconds</h3>");
        triviaData.hasUserAnswered = true;
        triviaData.timer = setInterval(showCountDown, 1000);
    }

    function showCountDown() {
        triviaData.allotedTime--;
        $("#timeLeft").html("<h3>Time remaining: " + triviaData.allotedTime + " Seconds</h3>");
        if (triviaData.allotedTime < 1) {
            clearInterval(triviaData.timer);
            triviaData.hasUserAnswered = false;
            answerPage();
        }
    }

    function answerPage() {
        tearDownQuestionPage();
        buildAnswerPage();
        if (triviaData.hasUserAnswered) {
            //the question was answered
            if (triviaData.theAnsUserSelected === triviaData.theCorrectAnswer) {
                //it was correct answer
                triviaData.numberOfCorrectAnswers++;
                $("#message").html(triviaData.messages.correct);
            } else {
                //it was not correct answer
                triviaData.numberOfIncorrectAnswers++;
                $("#message").html(triviaData.messages.incorrect);
                $("#correctAnswer").html("The correct answer is \"" + triviaData.theCorrectAnswer + "\"");
            }
        } else {
            //question was not answered at all
            triviaData.numberOfUnanswered++;
            $("#message").html(triviaData.messages.outOfTime);
            $("#correctAnswer").html("The correct answer is \"" + triviaData.theCorrectAnswer + "\"");
            triviaData.hasUserAnswered = true;
        }

        if (triviaData.currentQuestionNumber == triviaData.quiz.length - 1) {
            //we are done with our quiz show the scorebaord
            setTimeout(scoreBoardPage, 3000);
        }
        else {
            triviaData.currentQuestionNumber++;
            setTimeout(questionPage, 3000);
        }
    }

    //display scoreboard page
    function scoreBoardPage() {
        tearDownAnswerPage();
        buildScoreBoardPage();
        $("#results").html(triviaData.messages.quizCompleted);
        if (triviaData.numberOfCorrectAnswers !== 0) {
            $("#numberOfCorrectAnswers").html("You answered " + triviaData.numberOfCorrectAnswers + ((triviaData.numberOfCorrectAnswers === 1) ? (" question ") : (" questions ")) + "correctly!");
        }
        if (triviaData.numberOfIncorrectAnswers !== 0) {
            $("#numberOfWrongAnswers").html("You answered " + triviaData.numberOfIncorrectAnswers + ((triviaData.numberOfIncorrectAnswers === 1) ? (" question ") : (" questions ")) + "incorrectly");
        }
        if (triviaData.numberOfUnanswered !== 0) {
            $("#numberOfUnanswered").html("You unanswered " + triviaData.numberOfUnanswered + ((triviaData.numberOfUnanswered === 1) ? (" question") : (" questions")));
        }
        $("#restartBtn").addClass("reset");
        $("#restartBtn").show();
        $("#restartBtn").html("Start Over?")
        // restartTheGame();
    }

    //build questionpage
    function buildQuestionPage() {
        $("#startBtn").hide();//hide the button so we can show other things.
        addIntoDiv($("<div>"), true, "timeLeft", true, "", true);
        addIntoDiv($("<div>"), true, "image", true, "", true);
        addIntoDiv($("<div>"), true, "questionNumber", true, "", true);
        addIntoDiv($("<div>"), true, "questionText", true, "", true);
        addIntoDiv($("<div>"), true, "multiple-answers", true, "", true);
    }
    //teaddown Question page for the next page to populate
    function tearDownQuestionPage() {
        $("#questionNumber").empty();
        $("#image").empty();
        $("#questionText").empty();
        $(".multipleChoice").empty();
    }
    //build answerPage
    function buildAnswerPage() {
        addIntoDiv($("<div>"), true, "message", true, "", true);
        addIntoDiv($("<div>"), true, "correctAnswer", true, "", true);
        addIntoDiv($("<div>"), true, "gif", true, "", true);
    }
    //teaddown Answer page for the next page to populate
    function tearDownAnswerPage() {
        $("#message").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        $("#timeLeft").empty();
    }
    //build Scoreboard page
    function buildScoreBoardPage() {
        addIntoDiv($("<div>"), true, "results", true, "", true);
        addIntoDiv($("<div>"), true, "numberOfCorrectAnswers", true, "", true);
        addIntoDiv($("<div>"), true, "numberOfWrongAnswers", true, "", true);
        addIntoDiv($("<div>"), true, "numberOfUnanswered", true, "", true);
        addIntoDiv($("<div>"), true, "restartBtn", true, "", true);
    }

    function teadDownScoreBoardPage() {
        $("#results").empty();
        $("#numberOfCorrectAnswers").empty();
        $("#numberOfWrongAnswers").empty();
        $("#numberOfUnanswered").empty();
        $("#restartBtn").empty();
        $("#restartBtn").hide();

    }

    //create questions from the questionbank
    function createQuiz() {
        var exists = [];
        var randomNumber;
        for (let i = 0; i < triviaData.quizSize; i++) {
            do {
                randomNumber = Math.floor(Math.random() * triviaData.questionBank.length);
            } while (exists[randomNumber])
            exists[randomNumber] = true;
            triviaData.quiz.push(randomNumber);
        }
    }

    //simple function to add/append div to an element
    function addIntoDiv(divElement, toAppend, attrName, addAttr, textToAdd, addText) {
        if (addAttr) {
            divElement.attr("id", attrName);
        }
        if (addText) {
            divElement.text(textToAdd)
        }
        if (toAppend) {
            $(".container").append(divElement);
        }
    }
});