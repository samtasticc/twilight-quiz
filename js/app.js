/*-------------- Constants -------------*/

let userScore = 0;
let currentQuestion = 0;
let userScore2 = 0;
let currentQuestion2 = 0;
let index2 = 0;

const booksMoviesInfo = [
     {
          question: 'Q1. What does Bella bring with her to Forks?',
          choices: ['a. a blanket', 'b. her mom', 'c. a cactus', 'd. her boyfriend'],
          answer: 'c. a cactus',
     },
     {
          question: 'Q2. What does Charlie give Bella when she arrives in Forks?',
          choices: ['a. a truck', 'b. a cactus', 'c. a boat ride', 'd. shoes'],
          answer: 'a. a truck',
     },
     {
          question: 'Q3. What beach did Bella invite Edward to?',
          choices: ['a. Aliki', 'b. La Push', 'c. Ruby', 'd. Rialto'],
          answer: 'b. La Push',
     },
     {
          question: 'Q4. What Quileute legend does Jacob tell Bella about?',
          choices: ['a. werewolves', 'b. fairies', 'c. demons', 'd. vampires'],
          answer: 'd. vampires',
     },
     {
          question: "Q5. What happens when Edward confirms Bella's suspicions that he and his family are vampires?",
          choices: ['a. Bella decides she is irrevocably in love with him', 'b. Bella moves back in with her mom', 'c. Edward and his family eat Bella', 'd. They both stay friends.'],
          answer: 'a. Bella decides she is irrevocably in love with him',
     },
     {
          question: "Q6. What happens at Bella's birthday party?",
          choices: ['a. Her and Edward get married', 'b. She gets a paper cut in a room full of vampires', 'c. She has a great party', 'd. She decides to date Dr. Cullen instead'],
          answer: 'b. She gets a paper cut in a room full of vampires',
     },
     {
          question: 'Q7. Why did Edward leave Bella?',
          choices: ['a. He and his family are too dangerous for Bella', 'b. He did not love her anymore', 'c. His family made him', 'd. They got in trouble with the Volturi'],
          answer: 'a. He and his family are too dangerous for Bella',
     },
     {
          question: 'Q8. What happens to Jacob Black?',
          choices: ['a. nothing', 'b. he died', 'c. he left Forks', 'd. he turned into a werewolf'],
          answer: 'd. he turned into a werewolf',
     },
     {
          question: 'Q9. Why did Edward try to convince the Volturi to kill him?',
          choices: ['a. he is an idiot', 'b. he thought Bella died', 'c. the Volturi were forcing him to join them', 'd. he and his family had a fight'],
          answer: 'b. he thought Bella died',
     },
     {
          question: 'Q10. Who is creating an army of vampires to kill Bella?',
          choices: ['a. Laurent', 'b. Rosalie', 'c. The Volturi', 'd. Victoria'],
          answer: 'd. Victoria',
     },
     {
          question: 'Q11. True or False: Do the vampires and werewolves form an aliance?',
          choices: ['a. True', 'b. False'],
          answer: 'a. True',
     },
     {
          question: 'Q12. Does Bella decided to marry Edward?',
          choices: ['a. no', 'b. yes'],
          answer: 'b. yes',
     },
     {
          question: 'Q13. What happens to Bella on her honeymoon?',
          choices: ['a. Edward turns her into a vampire', 'b. she drowns', 'c. she gets pregnant', 'd. Edward abandonds her'],
          answer: 'c. she gets pregnant',
     },
     {
          question: 'Q14. How did Bella end up in labor?',
          choices: ['a. her water broke', 'b. the fetus broke her spine and the placenta ruptured', 'c. Dr. Cullen performed a c-section', 'd. the wolf pack killed Bella before she could give birth'],
          answer: 'b. the fetus broke her spine and the placenta ruptured',
     },
     {
          question: 'Q15. What did Jacob do after the baby was born?',
          choices: ['a. he imprinted on her', 'b. rejoined the original wolf pack', 'c. went cliff diving', 'd. ran away to Canada'],
          answer: 'a. he imprinted on her',
     },
]

const tspInfo = [
     {
          question: 'Q1. Who is the best admin ever?',
          choices: ['a. Nancy', 'b. Kayla, duh', 'c. Jackson Rathbone', 'd. We have admins?'],
          answer: 'b. Kayla, duh',
     },
     {
          question: 'Q2. What is the unfortunate circumstance of the infamous Twilight New Moon cup?',
          choices: ['a. it got pooped in', 'b. it got thrown away', 'c. it got stepped on and broke', 'd. it was left in the movie theater'],
          answer: 'a. it got pooped in',
     },
     {
          question: 'Q3. Yes or No: Does anyone in the group actually call Renesme by her real name?',
          choices: ['a. Yes', 'b. No'],
          answer: 'b. No',
     },
     {
          question: 'Q4. Is Jackson Rathbone in the group?',
          choices: ['a. absolutely', 'b. who is that?', 'c. maybe?', 'd. not a chance'],
          answer: 'a. absolutely',
     },
     {
          question: 'Q5. Jasper?',
          choices: ['a. Alice?', 'b. Who?', 'c. battle sckars', 'd. Maria?'],
          answer: 'c. battle sckars',
     },
     {
          question: 'Q6. What is with the rats?',
          choices: ['a. you would not understand', 'b. rats live in the sewer. where do declined posts go? Twilight Sewerposting!', "c. I don't know, I just go along with it", "d. we just like rats"],
          answer: 'b. rats live in the sewer. where do declined posts go? Twilight Sewerposting!',
     },
     {
          question: 'Q7. Live, Laugh, _____',
          choices: ['a. Lost', 'b. La Push', 'c. Learn', 'd. Loca'],
          answer: 'd. Loca',
     },
     {
          question: 'Q8. RATTIES 4 LYFE',
          choices: ['a. ✨🐀✨'],
          answer: 'a. ✨🐀✨',
     }
]
/*---------- Variables (state) ---------*/
// containers for storing data (const, let)

// src (optional): The URL of the audio file to load.
const audio = new Audio('./bellas_lullaby.mp3');
audio.volume = 0.2;
audio.loop = false;

/*----- Cached Element References  -----*/
// when you access an element in the DOM

let booksMovies = document.querySelector('#booksmovies')
let tsp = document.querySelector('#tsp')
let movieQuestions = document.querySelector('.booksmoviesrow')
let displayMessage = document.querySelector('.displayMessage')
let question = document.querySelector('.question')
let choices = document.querySelector('.choices')

/*-------------- Functions -------------*/
// reusuable blocks of code designed to perform a specific task

let index = 0
function moveForwardOne() {
     index += 1
}

/*----------- Event Listeners ----------*/
// a function that 'listens' for a specific event to occur

booksMovies.addEventListener("click", () => {
     // need the 'click' to register audio and bring up the 'All Books & Movies id/quiz
     if (index != booksMoviesInfo.length) {
          // with the data from the individual question, render its parts to the dom
          displayMessage.textContent = booksMoviesInfo[index].question
          // remove previous children of choices
          choices.replaceChildren()
          // target the choices of the current booksMovieInfo[index]
          booksMoviesInfo[index].choices.forEach((choice) => {
               //create a button element for question choices/options
               let bookMovieOptions = document.createElement('button')
               //assign the new button text content to the choice value
               bookMovieOptions.textContent = choice
               // add an event listener to make choices button clickable
               // this is not working, it removed my buttons
               bookMovieOptions.addEventListener('click', () => {
                    // displayMessage.textContent = ''
                    if (index != booksMoviesInfo.length) {
                         displayMessage.textContent += ' ' + booksMoviesInfo[index].answer
                         index = checkResponse(booksMoviesInfo[index], choice, displayMessage, index, 1)
                    }
               })
               //append the new button to the choices element
               choices.appendChild(bookMovieOptions)
          })
     }
     else if (index == booksMoviesInfo.length) {
          checkGameOver()
     }
})

function checkGameOver() {
     if (userScore == 10) {
          displayMessage.textContent = 'You Win!'
          userScore = 0
     }
     else if (userScore < 10) {
          displayMessage.textContent = 'You Lose!'
          userScore = 0
     }
}

function checkGameOver1() {
     if (userScore2 >= 5) {
          displayMessage.textContent = 'You Win!'
          userScore2 = 0
     }
     else if (userScore2 < 5) {
          displayMessage.textContent = 'You Lose!'
          userScore2 = 0
     }
}
function checkResponse(bookInfo, userChoice, response, questionNum, score) {
     let quiz = bookInfo.question
     let answer = bookInfo.answer
     if (answer == userChoice) {
          response.textContent = 'Correct!'
          if (score == 1) {
               userScore++
          }
          else if (score == 2) {
               userScore2++
          }
     } else {
          response.textContent = 'Wrong! '
     }
     questionNum++
     let scoreCount = document.getElementById('scorecount')
     if (score == 1) {
          scoreCount.innerHTML = 'Current Score: ' + userScore
     }
     else if (score == 2) {
          scoreCount.innerHTML = 'Current Score: ' + userScore2
     }
      return questionNum
}
tsp.addEventListener("click", () => {
     // need the 'click' to register audio and bring up the 'TSP' id/quiz
     if (index2 != tspInfo.length) {
          // with the data from the individual question, render its parts to the dom
          displayMessage.textContent = tspInfo[index2].question
          // remove previous children of choices
          choices.replaceChildren()
          // target the choices of the current booksMovieInfo[index2]
          tspInfo[index2].choices.forEach((choice) => {
               //create a button element for question choices/options
               let tspOptions = document.createElement('button')
               //assign the new button text content to the choice value
               tspOptions.textContent = choice
               // add an event listener to make choices button clickable
               // this is not working, it removed my buttons
               tspOptions.addEventListener('click', () => {
                    // displayMessage.textContent = ''
                    if (index2 != tspInfo.length) {
                         displayMessage.textContent += ' ' + tspInfo[index2].answer
                         index2 = checkResponse(tspInfo[index2], choice, displayMessage, index2, 2)
                    }
               })
               //append the new button to the choices element
               choices.appendChild(tspOptions)
          })
     }
     else if (index2 == tspInfo.length) {
          checkGameOver1()
     }
})

document.getElementById('playButton').addEventListener('click', () => {
     audio.play()
})
document.getElementById('pauseButton').addEventListener('click', () => {
     audio.pause()
})