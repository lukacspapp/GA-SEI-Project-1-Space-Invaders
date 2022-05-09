/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {

  // -----Grid
  const video = <HTMLDivElement>(document.querySelector('.video'))
  const main = <HTMLDivElement>(document.createElement('main'))
  const body = <HTMLBodyElement>(document.querySelector('body'))
  const grid = <HTMLDivElement>(document.querySelector('.grid'))
  const width: number = 12
  const height: number = 22.7
  const cellCount: number = width * height
  const cells: HTMLDivElement[]  = []
  // -----Alien Movement
    
  let right: number = 1
  let alienInterwall: number 
  let rightWay: boolean = true


  const rightEdge: number[] = [84, 105, 126, 147, 168, 189, 210, 231, 252]
  const leftEdge: number[] = [0, 23, 44, 65, 86, 107, 128, 149, 170, 191, 212, 233]

  // ------ start button, score and lives
  const startButton =  <HTMLButtonElement>(document.querySelector('.start-button'))
  console.log(startButton)
  const scoreDisplay = <HTMLDivElement>(document.querySelector('.scores'))
  console.log(scoreDisplay)
  const lives = <HTMLDivElement>(document.querySelector('.life'))
  console.log(lives)
  const livesDisplay = <HTMLDivElement>(document.querySelector('p'))
  


  
  
  //-----Player
  let playerCurrentPosition: number = 262
  const playerClass: string = 'player'



  //-----Livescore
  let livesRemaining: number = 3
  let currentScore: number = 0
  

  
  
  //----Alien
  let removedAliens: number[] = []
  const alienClass: string = 'alien'  
  let aliensCurrentPositon: number[] = []
  const aliensStartingPosition: number[] = [
    4,5,6,7,8,9,11,12,13,14,15,16
    ,25,26,27,28,29,30,32,33,34,35,36,37
    ,46,47,48,49,50,51,53,54,55,56,57,58,
    67,68,69,70,71,72,74,75,76,77,78,79
  ]
  // ---- Add Alien and Remove Alien
  function addAlien() {
    for (let i = 0; i < aliensStartingPosition.length; i++) 
      if (!removedAliens[i]) {
        cells[aliensStartingPosition[i]].classList.add(alienClass)
      }  
  }  

      
  
  function removeAlien(): void {
    for (let i = 0; i < aliensStartingPosition.length; i++) 
      cells[aliensStartingPosition[i]].classList.remove(alienClass)

      
  }
  // ---- Alien hit function sound
  const alienDie = <HTMLAudioElement>(document.querySelector('.alien-hit'))
  function alienHitSound(): void {
    alienDie.src = 'assets/invaderkilled.wav'
    alienDie.volume = 0.7
    alienDie.play()
  }
  // ---- shooting sound
  const shootingSound = <HTMLAudioElement>(document.querySelector('.shooting-sound'))
  function playerShootingSound(): void {
    shootingSound.src = 'assets/perfect-fart.wav'
    shootingSound.volume = 0.4
    shootingSound.play()
  }
  // ---- Player Dying sound
  const playerDeadSound = <HTMLAudioElement>(document.querySelector('.game-over-explosion'))
  function playerDieSound(): void {
    playerDeadSound.src = 'sassets/explosion.wav'
    playerDeadSound.volume = 0.7
    playerDeadSound.play()
  }
  // ---- Game End Sound 
  const gameEnd = <HTMLAudioElement>(document.querySelector('.game-end'))
  function gameEndSound(): void {
    gameEnd.src = 'assets/evillaugh.swf.wav'
    gameEnd.play()
  }
  // ---- Game background music
  const backgroundsound = <HTMLAudioElement>(document.querySelector('.background-music'))
  function backgroundMusic(): void {
    backgroundsound.src = 'assets/05_Earth.wav'
    backgroundsound.volume = 0.6
    backgroundsound.play()  
  }
  // ----- You Win Sound
  const youwin = <HTMLAudioElement>(document.querySelector('.you-win'))
  function youWinSound() {
    youwin.src = 'assets/force.wav' 
    youwin.play()
  }
  

  // ----- Create Grid

  function createGrid(playerCurrentPosition: number): void {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
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
  function gameOver(): void {
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
  }
  // ---- You Win Function
  function youWin(): void {
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
  // ---- Add Player and Remove Player 
  function addPlayer(playerPosition: number): void {  
    cells[playerPosition].classList.add(playerClass)
  }
  
  function removePlayer(playerPosition: number): void {   
    cells[playerPosition].classList.remove(playerClass)
  }
  // ------ Player movement 
  function handlePlayerKey(event: KeyboardEvent): void {
    // console.log(playerCurrentPosition)
    const key = event.key
    removePlayer(playerCurrentPosition)
    if (key === 'RIGHT' && playerCurrentPosition % height !== 22.300000000000008)  {
      console.log('RIGHT')
      playerCurrentPosition++
    } else if (key === 'LEFT' && playerCurrentPosition % height !== 2.300000000000008) {
      console.log('LEFT')
      playerCurrentPosition--
    } 
    addPlayer(playerCurrentPosition)
  }
  // ---- Aliens Movement 
  function alienMovement (): any {
    const rightSide: boolean = aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 178.8 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 158.40000000000003 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 138.00000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 117.60000000000005 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width  === 97.20000000000006 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 76.80000000000007 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 56.40000000000008 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 36.000000000000085 || aliensStartingPosition[aliensStartingPosition.length - 1] % height * width === 15.600000000000094
    const leftSide: boolean = aliensStartingPosition[0] % height * width === 252 || aliensStartingPosition[0] % height * width === 231.60000000000002 || aliensStartingPosition[0] % height * width === 211.20000000000002 || aliensStartingPosition[0] % height * width === 190.8 || aliensStartingPosition[0] % height * width === 170.40000000000003 || aliensStartingPosition[0] % height * width === 150.00000000000006 || aliensStartingPosition[0] % height * width === 129.60000000000005 || aliensStartingPosition[0] % height * width === 109.20000000000006
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
    }
    if  (aliensStartingPosition.includes(playerCurrentPosition)) {
      gameOver()
    }
    
    addAlien()
  }
  // ----- Shooting and laser
  function handleShootingKey(e: KeyboardEvent): void {
    let laserInterval: number
    let laser = playerCurrentPosition 
    
    function handleLaser(): void {
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
        
        scoreDisplay.innerHTML = String(currentScore)
        currentScore += 100
        alienHitSound()
      }
      
      
    }
    if (e.key === 'UP')  {
      console.log('UP')
      laserInterval = setInterval(handleLaser, 30)
      playerShootingSound()
    }
  } 
  createGrid(playerCurrentPosition)
  startButton.addEventListener('click', startGame, alienMovement)
}

window.addEventListener('DOMContentLoaded', init)
