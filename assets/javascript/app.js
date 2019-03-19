$(document).ready(function () {
    //the game object
    //https://www.thequiz.com/marvel-movie-quiz-comic-book-fans/
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
            answerIndex: 0,
            imageSource: "q6"
        }, {
            question: "Who was responsible for the experiments that gave Wanda and Pietro their superhuman abilities?",
            answerChoices: ["Vision", "Strucker", "Steve Rogers", "Nick Fury"],
            answerIndex: 0,
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
        currentQuestion: "",
        currentAnswer: "",
        quiz: [], //array of number that would create questions.
        messages: {
            correct: "That's correct",
            incorrect: "That is incorrect!",
            outOfTime: "You ran out of time.",
            quizCompleted: "Quiz is completed"
        }
    }

    $("#startBtn").on("click", function () {
        // buildQuestionPage();
    });
    //build questionpage
    function buildQuestionPage() {
        $("#startBtn").hide();//hide the button so we can show other things.
        addIntoDiv($("div"), "timeLeft", "Time Left");
        addIntoDiv($("div"), "currentQuestion", "this is the current Question");
        addIntoDiv($("div"), "multiple-answers", "");
    }
    //build answerPage
    function buildAnswerPage(){
        addIntoDiv($("div"), "message", "");
        addIntoDiv($("div"), "correctAnswer", "");
        addIntoDiv($("div"), "gif", "");
    }
    //build Scoreboard page
    function buildScoreBoardPage(){
        addIntoDiv($("div"), "results", "");
        addIntoDiv($("div"), "numberOfCorrectAnswers", "");
        addIntoDiv($("div"), "numberOfWrongAnswers", "");
        addIntoDiv($("div"), "numberOfUnanswered", "");
        addIntoDiv($("div"), "startOverBtn", "");
    }
    //create questions from the questionbank


    //simple function to add/append div to an element

    function addIntoDiv(divElement, attrName, textToAdd) {
        divElement.attr("id", attrName);
        divElement.text(textToAdd)
        $("#container").append(divElement);
    }
    // function addIntoDiv(divElement, textToAppend, appendBool){
    //     if(appendBool){
    //       divElement.append(textToAppend);
    //     }else{
    //       divElement.html(textToAppend);
    //     }
    // }

});