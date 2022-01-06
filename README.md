# SEI-Project-1-Space-Invaders 👽

***Timeframe***

9 days

## Goal:

To create a fully functioning browser-based game of your choice using vanilla JavaScript.
## Technologies Used

* HTML5 with HTML5 audio
* CSS3 
* JavaScript (ES6)


# Space Invaders

My first ever coding project. A similar recreation of the famous arcade game SPACE INVADERS.

<img src='https://i.imgur.com/IOkz5Ey.png'>

### Play deployed version

https://lukacspapp.github.io/SEI-Project-1-Space-Invaders/


## Controls

* Click the Start Button to start the game
* Use the left ◀️ and right ▶️ arrow keys to move the spaceship 
* Up 🔼  arrow key fires the laser




## Getting Started

### Day One: 

#### Planning and Basic Structure


> * Create a 21 x 13 grid
> * Draw 4 lines of 10 aliens
> * Start the alien movement after 1 second of pushing the start
> * Draw the spaceship
> * 4 lines of alien start moving to the right side all together
> * Once they came back to the left side of the grid they should go down one line
> * Once the lines of aliens reach the line of the spaceship 'Game Over'
> * Once the player has shot all aliens "You Win"
> * Collision Detection
> * Player's score should be displayed at the ends
> * Sounds
> * Game over, You Win Logic
> * Styling


The 21 x 13 grid was made by creating 273 divs within the main grid wrapper. The 240 divs would be referred to as 'cells' in this README.

Each cell was given an ID of its cell number as this would help with Alien's positioning and collision detection.

The movement of a cell is achieved by adding and removing the 'occupied' player, alien, laser class. As the aliens, player and the laser moves position - the class is removed from the previous cell and applied to the new one. The 3 different classes have 3 different timers, which means they each move at a different pace.

### Day Two: 

#### Drawing aliens and the spaceship

I declared the starting positions for the aliens by assigning the cell's ID to each alien and storing them in an array

I also assigned an empty array for the <code>removedAliens</code> to keep track of the aliens that are eliminated. 

Also I declared a <code>let</code> variable called <code> playerCurrentPosition</code> for the player in the 262nd cell that will change according to the key the user is pressing, ◀️ or ▶️. 

```
let removedAliens = []
  const alienClass = 'alien'  
  let aliensCurrentPositon = []
  const aliensStartingPosition = [
    4,5,6,7,8,9,11,12,13,14,15,16
    ,25,26,27,28,29,30,32,33,34,35,36,37
    ,46,47,48,49,50,51,53,54,55,56,57,58,
    67,68,69,70,71,72,74,75,76,77,78,79
   ]
```    

  ```
  let playerCurrentPosition = 262
  const playerClass = 'player'
```

Then Here are the functions responsible for the movement of the aliens and the spaceship.
I used a for loop in both functions. 

Alien movement

I used a for loop and added a the <code>alienClass</code> that has 👾 gif. Also later added the if statment so that the eliminated aliens are stored in the <code>removedAliens</code> array.

```
function addAlien() {
    for (let i = 0; i < aliensStartingPosition.length; i++) 
      if (!removedAliens[i]) {
        cells[aliensStartingPosition[i]].classList.add(alienClass)
      }  
  }  
```

```
function removeAlien() {
    for (let i = 0; i < aliensStartingPosition.length; i++) 
      cells[aliensStartingPosition[i]].classList.remove(alienClass)
```      

Player movement function

I added the <code>playerClass</code> to the player's starting position that has the 🚀 gif.



```
function addPlayer(playerPosition) {  
    cells[playerPosition].classList.add(playerClass)
  }
  
  function removePlayer(playerPosition) {  
    cells[playerPosition].classList.remove(playerClass)
  }
```  
I added an event listener for the ◀️ and the ▶️ key by using their codes on the keyboard and have calculated the left and right side of the grid so the player is only allowed to move within the grid.

```

  // ------ Player movement 
  function handlePlayerKey(event) {
    // console.log(playerCurrentPosition)
    const key = event.keyCode


    removePlayer(playerCurrentPosition)

    if (key === 39 && playerCurrentPosition % height !== 22.300000000000008)  {
      console.log('RIGHT')
      playerCurrentPosition++
    } else if (key === 37 && playerCurrentPosition % height !== 2.300000000000008) {
      console.log('LEFT')
      playerCurrentPosition--
    } 
    
    addPlayer(playerCurrentPosition)
```    

### Day Three & Four:


#### Alien movement 

I would say this was the most challenging part of this project. Figuring out the logic of how to move the aliens. The key part was when I assign the direction to a variable and it is changing whenever the aliens on the side hit either edge.

I calculated the left and the right edges of each row by determining the last alien's position. 

Then in the first, if statement whenever the last alien is on the right edge and the movement was in the right direction all of the aliens will move down one line, in the second if statement the if the direction is not right and the last alien reach the left edge that all aliens moving down one line.


```
function alienMovement () {
    const rightSide = aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 178.8 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 158.40000000000003 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 138.00000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 117.60000000000005 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 97.20000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 76.80000000000007 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 56.40000000000008 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 36.000000000000085 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 15.600000000000094
    const leftSide = aliensStartingPosition[0] % height * width === 252 || aliensStartingPosition[0] % height * width === 231.60000000000002 || aliensStartingPosition[0] % height * width === 211.20000000000002 || aliensStartingPosition[0] % height * width === 190.8 || aliensStartingPosition[0] % height * width === 170.40000000000003 || aliensStartingPosition[0] % height * width === 150.00000000000006 || aliensStartingPosition[0] % height * width === 129.60000000000005 || aliensStartingPosition[0] % height * width === 109.20000000000006
    removeAlien()

    if (rightSide && rightWay) {
      for (let i = 0; i < aliensStartingPosition.length; i++) {
        aliensStartingPosition[i] += 22
        right = -1
        rightWay = false
        
      } 
    }
    if (leftSide && !rightWay) {
      for (let i = 0; i < aliensStartingPosition.length; i++) {
        aliensStartingPosition[i] += 20
        right = 1
        rightWay = true
      }
    }
```  

### Day Five, Six & Seven:

#### Collision Detection  

Setting up the laser



In the h<code>handleShootingKey</code> function I added an event listener to the 🔼 key that start an intervall and play the shooting sound. Within that function I also added the <code>handleLaser</code> function that adds and removes the <code>laser</code> class to the grid and moves up by one row within 30ms. If the one cell contains the <code>alien</code> and the <code>laser</code> class then those classes will be removed, the player points goes up by 100 and the <code>boom</code> class will be added which has the 🎇 gif which is also be showing for 30ms. Then the removed aliens will move the the <code>removedAlien</code> array, when that array reaches 48 aliens the <code>youWin</code> function gets triggered.


```
function handleShootingKey(e) {
    let laserInterval
    let laser = playerCurrentPosition 
    
    function handleLaser() {
      cells[laser].classList.remove('laser')
      laser -= 21
      cells[laser].classList.add('laser')
      console.log(laser)
      if (cells[laser].classList.contains('alien')) {
        cells[laser].classList.remove('laser')
        cells[laser].classList.remove('alien')
        cells[laser].classList.add('bom')        
        setTimeout(()=> cells[laser].classList.remove('bom'), 300)
        clearInterval(laserInterval)        
        const removedAlien = aliensStartingPosition.indexOf(laser)
        removedAliens.push(removedAlien)
        console.log(removedAliens)
        if (removedAliens.length === 48) {
          youWin()
          shootingSound.pause()
          clearInterval(laserInterval)
        }
        
        scoreDisplay.innerHTML = currentScore
        currentScore += 100
        alienHitSound()
      }
    }
    if (e.keyCode === 38) {
      console.log('UP')
      laserInterval = setInterval(handleLaser, 30)
      playerShootingSound()
    }
  } 
```    

### Day Seven, Eight & Nine:

#### Game Over, Game Win Functions

Game Over Function

If an alien reaches the spaceship the <code>gameOver</code> function is triggered which displays a funny message, sound, and gif at the same time.
Also, it stops the background music and changes the score display.

```
function gameOver() {
    clearInterval(alienInterwall)
    scoreDisplay.innerHTML = 'You Lost'
    // body.classList.add('game-over')
    grid.classList.add('player-die')
    setTimeout(gameEndSound, 1000)
    playerDieSound()
    lives.innerHTML = ' '
    livesDisplay.innerHTML = 'You Are Alien Food'
    backgroundsound.src = ''
    const gameOverGif = document.createElement('img')
    gameOverGif.src = 'assets/glasess.gif'
    document.body.appendChild(gameOverGif)
    shootingSound.src = ''
```    

You Win function

If the player eliminated all aliens the <code>youWin</code> function is triggered which displays a 'You Win' message and starts a funny sound and a WINNER gif.


```
function youWin() {
    livesDisplay.innerHTML = 'You Win'
    clearInterval(alienInterwall)
    backgroundsound.src = ''
    grid.classList.add('player-die')
    setTimeout(youWinSound, 800)
    const youWinGif = document.createElement('img')
    youWinGif.src = 'assets/winner gipf.gif'
    document.body.appendChild(youWinGif)
    shootingSound.src = ''
    lives.innerHTML = ' '
  }
```  
  
## Bugs 🐞

* I could not get the aliens to shoot at the player.
* After the game had ended the user has to reload the page to play again.

## Wins 🏆

* Got the MVP! 

* I had the opportunity to practice array methods and the basics of vanilla JavaScript.

* Styling - I am quite happy with the look of the game and I had lots of fun playing with the sounds.

## Challenges 🧗‍♂️

The biggest challenge was to figure out how to move the aliens but with a little help from Mike Soltysiak, SEI Teaching Assistant I was able to figure it out.

## Key Learnings 📝

* **Project Choice**: Initially my lead instructor persuaded me to choose this game as I was having problems understanding array methods at the beginning. I was really happy with the outcome.

* **JS Fundamentals**: This was my first big coding project, and since it was strong on logic - it helped me solidify basic JS concepts & array methods.

* **Knowing when to take a break**: This project taught me that I should step away if I've been trying to solve something for too long and not making progress. The break can give you much-needed rest and you'll likely come back with a better idea of how to solve the problem.


