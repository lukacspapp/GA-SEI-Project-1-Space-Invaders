/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {
  // -----Grid
  var video = (document.querySelector('.video'))
  var main = (document.createElement('main'))
  var body = (document.querySelector('body'))
  var grid = (document.querySelector('.grid'))
  var width = 12
  var height = 22.7
  var cellCount = width * height
  var cells = []
  // -----Alien Movement
  var right = 1
  var alienInterwall
  var rightWay = true
  var rightEdge = [84, 105, 126, 147, 168, 189, 210, 231, 252]
  var leftEdge = [0, 23, 44, 65, 86, 107, 128, 149, 170, 191, 212, 233]
  // ------ start button, score and lives
  var startButton = (document.querySelector('.start-button'))
  console.log(startButton)
  var scoreDisplay = (document.querySelector('.scores'))
  console.log(scoreDisplay)
  var lives = (document.querySelector('.life'))
  console.log(lives)
  var livesDisplay = (document.querySelector('p'))
  //-----Player
  var playerCurrentPosition = 262
  var playerClass = 'player'
  //-----Livescore
  var livesRemaining = 3
  var currentScore = 0
  //----Alien
  var removedAliens = []
  var alienClass = 'alien'
  var aliensCurrentPositon = []
  var aliensStartingPosition = [
    4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16,
    25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37,
    46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58,
    67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79
  ]
  // ---- Add Alien and Remove Alien
  function addAlien() {
    for (var i = 0; i < aliensStartingPosition.length; i++)
      if (!removedAliens[i]) {
        cells[aliensStartingPosition[i]].classList.add(alienClass)
      }
  }
  function removeAlien() {
    for (var i = 0; i < aliensStartingPosition.length; i++)
      cells[aliensStartingPosition[i]].classList.remove(alienClass)
  }
  // ---- Alien hit function sound
  var alienDie = (document.querySelector('.alien-hit'))
  function alienHitSound() {
    alienDie.src = 'assets/invaderkilled.wav'
    alienDie.volume = 0.7
    alienDie.play()
  }
  // ---- shooting sound
  var shootingSound = (document.querySelector('.shooting-sound'))
  function playerShootingSound() {
    shootingSound.src = 'assets/perfect-fart.wav'
    shootingSound.volume = 0.4
    shootingSound.play()
  }
  // ---- Player Dying sound
  var playerDeadSound = (document.querySelector('.game-over-explosion'))
  function playerDieSound() {
    playerDeadSound.src = 'sassets/explosion.wav'
    playerDeadSound.volume = 0.7
    playerDeadSound.play()
  }
  // ---- Game End Sound 
  var gameEnd = (document.querySelector('.game-end'))
  function gameEndSound() {
    gameEnd.src = 'assets/evillaugh.swf.wav'
    gameEnd.play()
  }
  // ---- Game background music
  var backgroundsound = (document.querySelector('.background-music'))
  function backgroundMusic() {
    backgroundsound.src = 'assets/05_Earth.wav'
    backgroundsound.volume = 0.6
    backgroundsound.play()
  }
  // ----- You Win Sound
  var youwin = (document.querySelector('.you-win'))
  function youWinSound() {
    youwin.src = 'assets/force.wav'
    youwin.play()
  }
  // ----- Create Grid
  function createGrid(playerCurrentPosition) {
    for (var i = 0; i < cellCount; i++) {
      var cell = document.createElement('div')
      // cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerCurrentPosition)
    addAlien(aliensStartingPosition)
  }
  // ---- Start Game function
  function startGame() {
    addPlayer(playerCurrentPosition)
    addAlien(aliensStartingPosition)
    alienMovement()
    alienInterwall = setInterval(alienMovement, 400)
    backgroundMusic()
    document.addEventListener('keydown', handleShootingKey)
    document.addEventListener('keydown', handlePlayerKey)
  }
  // ----- Game Over function
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
    var gameOverGif = document.createElement('img')
    gameOverGif.src = 'assets/glasess.gif'
    document.body.appendChild(gameOverGif)
    shootingSound.src = ''
  }
  // ---- You Win Function
  function youWin() {
    livesDisplay.innerHTML = 'You Win'
    clearInterval(alienInterwall)
    backgroundsound.src = ''
    grid.classList.add('player-die')
    setTimeout(youWinSound, 800)
    var youWinGif = document.createElement('img')
    youWinGif.src = 'assets/winner gipf.gif'
    document.body.appendChild(youWinGif)
    shootingSound.src = ''
    lives.innerHTML = ' '
  }
  // ---- Add Player and Remove Player 
  function addPlayer(playerPosition) {
    cells[playerPosition].classList.add(playerClass)
  }
  function removePlayer(playerPosition) {
    cells[playerPosition].classList.remove(playerClass)
  }
  // ------ Player movement 
  function handlePlayerKey(event) {
    // console.log(playerCurrentPosition)
    var key = event.key
    removePlayer(playerCurrentPosition)
    if (key === 'd' && playerCurrentPosition % height !== 22.300000000000008) {
      console.log('RIGHT')
      playerCurrentPosition++
    } else if (key === 'a' && playerCurrentPosition % height !== 2.300000000000008) {
      console.log('LEFT')
      playerCurrentPosition--
    }
    addPlayer(playerCurrentPosition)
  }
  // ---- Aliens Movement 
  function alienMovement() {
    var rightSide = aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 178.8 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 158.40000000000003 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 138.00000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 117.60000000000005 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 97.20000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 76.80000000000007 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 56.40000000000008 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 36.000000000000085 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 15.600000000000094
    var leftSide = aliensStartingPosition[0] % height * width === 252 || aliensStartingPosition[0] % height * width === 231.60000000000002 || aliensStartingPosition[0] % height * width === 211.20000000000002 || aliensStartingPosition[0] % height * width === 190.8 || aliensStartingPosition[0] % height * width === 170.40000000000003 || aliensStartingPosition[0] % height * width === 150.00000000000006 || aliensStartingPosition[0] % height * width === 129.60000000000005 || aliensStartingPosition[0] % height * width === 109.20000000000006
    removeAlien()
    if (rightSide && rightWay) {
      for (var i = 0; i < aliensStartingPosition.length; i++) {
        aliensStartingPosition[i] += 22
        right = -1
        rightWay = false
      }
    }
    if (leftSide && !rightWay) {
      for (var i = 0; i < aliensStartingPosition.length; i++) {
        aliensStartingPosition[i] += 20
        right = 1
        rightWay = true
      }
    }
    for (var i = 0; i < aliensStartingPosition.length; i++) {
      aliensStartingPosition[i] += right
    }
    if (aliensStartingPosition.includes(playerCurrentPosition)) {
      gameOver()
    }
    addAlien()
  }
  // ----- Shooting and laser
  function handleShootingKey(e) {
    var laserInterval
    var laser = playerCurrentPosition
    function handleLaser() {
      cells[laser].classList.remove('laser')
      laser -= 21
      cells[laser].classList.add('laser')
      console.log(laser)
      if (cells[laser].classList.contains('alien')) {
        cells[laser].classList.remove('laser')
        cells[laser].classList.remove('alien')
        cells[laser].classList.add('bom')
        setTimeout(function () {
          return cells[laser].classList.remove('bom') 
        }, 300)
        clearInterval(laserInterval)
        var removedAlien = aliensStartingPosition.indexOf(laser)
        removedAliens.push(removedAlien)
        console.log(removedAliens)
        if (removedAliens.length === 48) {
          youWin()
          shootingSound.pause()
          clearInterval(laserInterval)
        }
        scoreDisplay.innerHTML = String(currentScore)
        currentScore += 100
        alienHitSound()
      }
    }
    if (e.key === 'w') {
      console.log('UP')
      laserInterval = setInterval(handleLaser, 30)
      playerShootingSound()
    }
  }
  createGrid(playerCurrentPosition)
  startButton.addEventListener('click', startGame, alienMovement)
}
window.addEventListener('DOMContentLoaded', init)
