function init() {

  // -----Grid
  const main = document.querySelector('.main')
  const body = document.querySelector('body')
  const grid = document.querySelector('.grid')
  const width = 12
  const height = 22.7
  const cellCount = width * height
  const cells = []
  // -----Alien Movement
    
  let right = 1
  let alienInterwall
  let rightWay = true


  const rightEdge = [84, 105, 126, 147, 168, 189, 210, 231, 252]
  const leftEdge = [0, 23, 44, 65, 86, 107, 128, 149, 170, 191, 212, 233]

  // ------ start button, score and lives
  const startButton = document.querySelector('.start-button')
  console.log(startButton)
  const scoreDisplay = document.querySelector('.scores')
  console.log(scoreDisplay)
  const lives = document.querySelector('.life')
  console.log(lives)



  
  
  //-----Player
  let playerCurrentPosition = 262
  const playerClass = 'player'



  //-----Livescore
  let livesRemaining = 3
  let currentScore = 0
  

  
  
  //----Alien


  const alienClass = 'alien'  
  let aliensCurrentPositon = []
  const aliensStartingPosition = [
    4,5,6,7,8,9,11,12,13,14,15,16
    ,25,26,27,28,29,30,32,33,34,35,36,37
    ,46,47,48,49,50,51,53,54,55,56,57,58,
    67,68,69,70,71,72,74,75,76,77,78,79
    
    
  ]
  // ---- Add Alien and Remove Alien
  function addAlien() {
    for (let i = 0; i < aliensStartingPosition.length; i++) 
      cells[aliensStartingPosition[i]].classList.add(alienClass)
    
    
  }
  function removeAlien() {
    for (let i = 0; i < aliensStartingPosition.length; i++)
      cells[aliensStartingPosition[i]].classList.remove(alienClass)
  }
  // ---- Alien hit function sound
  const alienDie = document.querySelector('.alien-hit')
  function alienHitSound() {
    alienDie.src = 'assets/invaderkilled.wav'
    alienDie.play()
  }
  // ---- shooting sound
  const shootingSound = document.querySelector('.shooting-sound')
  function playerShootingSound() {
    shootingSound.src = 'assets/shoot.wav'
    shootingSound.play()
  }
  // ---- Player Dying sound
  const playerDeadSound = document.querySelector('.game-over-explosion')
  function playerDieSound() {
    playerDeadSound.src = 'assets/explosion.wav'
    playerDeadSound.play()
  }



  // ----- Create Grid

  function createGrid(playerCurrentPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
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
    alienInterwall = setInterval(alienMovement, 10)
    
    
    
    

    
  }
  // ----- Game Over function
  function gameOver() {
    clearInterval(alienInterwall)
    scoreDisplay.innerHTML = 'You Lost'
    body.classList.add('game-over')
    cells[playerCurrentPosition].classList.add('player-die')
    playerDieSound()
  }
  console.log(playerCurrentPosition)


  // ---- Add Player and Remove Player 
  function addPlayer(playerPosition) {  
    cells[playerPosition].classList.add(playerClass)
  }
  
  function removePlayer(playerPosition) {  
    cells[playerPosition].classList.remove(playerClass)
  }
  // -----------------------------------
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
    // console.log(playerCurrentPosition)
  }


  // ---- Aliens Movement 
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
    
    
    for (let i = 0; i < aliensStartingPosition.length; i++) {
      aliensStartingPosition[i] += right 
      
      console.log(aliensStartingPosition)
    }
    if  (aliensStartingPosition.includes(playerCurrentPosition)) {
      gameOver()
    }
    
    addAlien()
  }
  // ----- Shooting and laser
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
        scoreDisplay.innerHTML = currentScore
        currentScore += 100
        alienHitSound()
        

      }
      
    }
    if (e.keyCode === 38) {
      console.log('UP')
      laserInterval = setInterval(handleLaser, 90)
      playerShootingSound()
    }
  }
  
  document.addEventListener('keydown', handleShootingKey)

  

  document.addEventListener('keydown', handlePlayerKey)

  createGrid(playerCurrentPosition)
  startButton.addEventListener('click', startGame, alienMovement)


}

window.addEventListener('DOMContentLoaded', init)
