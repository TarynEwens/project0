# Tic Tac Toe
A simple tic tac toe (naughts and crosses) game with a minimalist vibe.

See it in action here: http://tarynelise.github.io/project0

It is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

### How to play
- Type in your chosen names for player 1 and player 2 and then hit submit.
- Your game board will load and ask you to choose which player will go first - click the players name to choose.
- A coloured X or O under the players name will indicate who's turn it is.
- Choose an available box by clicking on it.
- Try to get three in a row!
- Click try again to keep playing again, and again, and again, and again, and again, and again...

#### Objective
To build a web application from scratch that allows two players to play tic tac toe.

#### Built With
- HTML
- CSS (including animate.css and normalize.css)
- Javascript
- jQuery

#### Approach
My approach for this task changed multiple times throughout the week.

I initially thought I'd solved the logic easily, by creating an app that pushed each players chosen square numbers into an array, which was later compared to winning arrays. All well and good, until a player takes more than 3 squares to achieve a win. Dead end.

Logic #2 hard coded all win options, by saying if cell 1 = X and cell 5 = X and cell 9 = X then X is the winner.
This logic worked, but the code was rather long. I wanted to try to simplify the task.

So on to logic attempt #3...

In this approach I decided that a better way would be to use 'data' in the HTML to include row and column numbers for each cell in a table. The logic for the basic game structure takes the following steps;

1. Starting player is chosen by users.

2. A 'click' function is called that states on each cells click, pop one number out of the 'available' array (initially array of numbers 1 - 9). The players icon is added into their chosen cell and the 'findPlayer' function is called. It also turns off that cells click function so it can't be used again.

3. When the 'findPlayer' function is called, it sets the confirms the players name, icon, and icon's class, then calls the 'findMatch' function.

4. When 'findMatch' function is called, I created a for loop that will loop through an array of win situations (eg. X X X or O O O). I selected all items in each row, or column at a time and checked for a match. If a match was found, I pushed the results into a new array and then turned that into a string so it could be compared later.

Diagonals were trickier, so I ended up hard coding each win situation in for those two problems.
To find a draw I checked to see if the 'available' arrays length was 0. If it was, and no previous match had been found, then a draw was determined.

5. If a match was found, the 'findWin' function is called which states if the winning string is 'X X X' then player 1 is the winner, or vice versa.

6. The game can then be played again, and the next player is always the one who didn't start in the previous game.

7. I later added a counter which adds 1 to each players 'win' variable, so that that multiple rounds can be tracked, as well as a log in feature so the players can choose their own name.

#### To do:
- I would like to restructure my logic in a way that doesn't require hard coding any wins, so that the game board can be made larger without making too many changes to the logic.

#### License
This project is dual licensed under the MIT and GPL licenses.

#### Acknowledgments
Thanks to Joel, John and Theo @ General Assembly for all of the help debugging along the way!
Also to @avielgoh for the inspiration behind the log in page!

This project was undertaken as part of the General Assembly Sydney's WDI 26 course, March 2018.
