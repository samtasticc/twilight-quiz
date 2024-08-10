/*-------------- Constants -------------*/
// !const handleMov = (event) => {
     //!logic for the event handler, update state variables, etc.

     //!Render data to the DOM
//!     render()
// !}

const booksMovies = document.querySelector('#booksmovies')

const tsp = document.querySelector('#tsp')

const movieQuestions = document.querySelector('.booksmoviesrow')

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
console.log(booksMoviesInfo)

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
          choices: ['a. Loca', 'b. La Push', 'c. Learn', 'd. Loca'],
          answer: 'd. Loca',
     },
     {
          question: 'Q8. ',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
     {
          question: '',
          choices: [''],
          answer: '',
     },
]
/*---------- Variables (state) ---------*/
// containers for storing data (const, let)


/*----- Cached Element References  -----*/
// when you access an element in the DOM
const displayMessage1 = document.querySelector('.displayMessage1')
const bmQuestion = document.querySelector('.bmQuestion')
const choices1 = document.querySelector('.choices1')

const displayMessage2 = document.querySelector('.displayMessage2')
const tspQuestion = document.querySelector('.tspQuestion')
const choices2 = document.querySelector('.choices2')

// if (booksMoviesInfo.length > 0) {
//      for (let i = 0; i < booksMoviesInfo.length; i++){
          
//      }
// } else {

// }

// for (let i = 0; i < booksMoviesInfo.length; i++) {
//      // if (booksMoviesInfo.length);
//      console.log(booksMoviesInfo[i]) // returned undefined
// }
// // i need this for loop to interate thru the booksMoviesInfo array and populate each question with the choices.

/*-------------- Functions -------------*/
// reusuable blocks of code designed to perform a specific task

// declare a function with its name called 'books'
// 'books' can be whatever i want
// function books () {
//      // create a dom element
//      let bookMovie = document.createElement('div')
//      // access the dom element's text content and assign it to 'whatever i want'
//      bookMovie.textContent = 'whatever I want'
//      // 'access' the queried dom element and append the created dom element 
//      movieQuestions.append(bookMovie)
// } 
// // call the 'books' function to run the code inside
// books()

let index = 0
function moveForwardOne() {
     index += 1
}

/*----------- Event Listeners ----------*/
// a function that 'listens' for a specific event to occur

booksMovies.addEventListener("click", () => {
     // need the 'click' to register audio and bring up the 'All Books & Movies
     // id/quiz
     console.log(booksMoviesInfo[index])

// with the data from the individual question, render its parts to the dom
     displayMessage1.textContent = booksMoviesInfo[index].question
     // target the choices of the current booksMovieInfo[index]
     booksMoviesInfo[index].choices.forEach((choice)=> {
          console.log(choice)
          //create a button element line 211
          let bookMovie = document.createElement('button')
          //assign the new button text content to the choice value
          bookMovie.textContent = choice
          //append the new button to the choices element
          booksMoviesInfo.choices.append(bookMovie)
     })
     console.log('I clicked the books button!')
     moveForwardOne()
})


tsp.addEventListener("click", () => {
     // need the 'click' to register audio and bring up the 'TSP' id/quiz
     console.log('I clicked the tsp button!')
})

