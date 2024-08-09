/*-------------- Constants -------------*/
// !const handleMov = (event) => {
     //!logic for the event handler, update state variables, etc.

     //!Render data to the DOM
//!     render()
// !}

const booksMovies = document.querySelector('#booksmovies')

const tsp = document.querySelector('#tsp')

const movieQuestions = document.querySelector('.booksmoviesrow')
/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
// declare a function with its name called 'foo'
// 'foo' can be whatever i want
function books () {
     // create a dom element
     let bookMovie = document.createElement('div')
     // access the dom element's text content and assign it to 'whatever i want'
     bookMovie.textContent = 'this is question one'
     // 'access' the queried dom element and append the created dom element 
     movieQuestions.append(bookMovie)
} 
// call the 'foo' function to run the code inside
books()
/*----------- Event Listeners ----------*/

booksMovies.addEventListener("click", () => {
     console.log('I clicked the books button!')
})

tsp.addEventListener("click", () => {
     console.log('I clicked the tsp button!')
})