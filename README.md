# All Things Twilight Trivia Quiz
![a screenshot of the All Things Twilight Trivia Quis](https://i.imgur.com/mXWJHho.jpeg)

### Description

* This is the All Things Twilight Trivia Quiz. You can test your Twilight Saga knowledge via two categories: All Books & Movies and TSP.
    * ✨All Books & Movies✨: Have fun with 15 questions based on the books and movies. You must get 10 questions correct in order to pass. Ensure you select the ✨All Books & Movies✨ button to move on to the next question after you make your choice.
    * ✨🐀TSP🐀✨: Only choose this category if you are familiar with the Twilight Shitposting group on Facebook. Boasting nearly 700k members, the lore continues to grow. Have fun with 8 questions based on jokes and stories from the popular Facebook group. You must get 5 questions correct in order to pass. Ensure you select the ✨TSP✨ button to move on to the next question after you make your choice.

### Getting Started
[My Deployed Game](https://samtasticc.github.io/twilight-quiz/)

#### Your choice of game.
Quiz Game - A theme. At least two categories. Score mechanics. Audio.

All Things Twilight Quiz
* Category 1 - All Books & Movies
* Category 2 - TSP

#### User Stories
* A banner is at the top of the page so the user knows they are in the right place.
* The categories of the quiz are clearly labeled.
* The instructions of the game are provided.
* The user's selections are registered.
* After each question is answered, a popup displays the points.
* The user has 15 seconds to read and answer each question.
* When the timer reaches 0, the player loses. 

#### Pseudocode for the overall gameplay.
* User navigates to site and selects their category. (Grid/flexbox and buttons)
* IF the user clicks the All Books/Movies category:  (function and if statement)
    * THEN the button gets a few shades darker/lighter (event listener)
    * "Bella's Theme" will play (10-15 sec) (HTMLAudioElement: Audio(), found via MDN web docs)
* IF the user clicks the TSP category: (function and if statement)
    * THEN the button gets a few shades darker/lighter (event listener)
    * "Decode" by Paramore will play (10-15 sec) (HTMLAudioElement: Audio())
* Within each category, 15+ questions will be displayed. (Grid/flexbox and buttons)
* IF the user selects their answer before the 15 second timer elapses:
    * THEN the button gets a few shades darker/lighter (event listener)
    * THEN the user's score pops up, stating if the won/lost (unsure on this one, google led me to modals)
    * IF question was correct, they get a point 
        * ELSE the question was incorrect, they don't get a point

#### Technologies Used
* HTML
* CSS
* JavaScript

#### Next Steps
* Make the audio play/pause buttons smaller
* Add specific audio to specific button clicks
* Create more TSP related questions
* Create a timer for the entire quiz
