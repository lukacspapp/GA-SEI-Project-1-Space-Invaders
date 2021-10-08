function init() {

  // -----Grid
  const grid = document.querySelector('.grid')
  const width = 12
  const height = 22.7
  const cellCount = width * height
  const cells = []





  // ------ start button, score and lives
  const startButton = document.querySelector('.start-button')
  console.log(startButton)
  const scoreDisplay = document.querySelector('.scores')
  console.log(scoreDisplay)
  const lives = document.querySelector('.life')
  console.log(lives)



  
  
  //-----Player
  const playerStartingPosition = 262
  let playerCurrentPosition = 262
  const playerClass = 'player'


  //-----Livescore
  let livesRemaining = 3
  let currentScore = 0
  

  
  //----Alien
  let direction = 1
  const alienClass = 'alien'  
  let aliensCurrentPositon
  const aliensStartingPosition = [ 
    3,4,5,6,7,8,9,11,12,13,14,15,16,17
    ,25,26,27,28,29,30,32,33,34,35,36,37
    ,46,47,48,49,50,51,53,54,55,56,57,58,
    66,67,68,69,70,71,72,74,75,76,77,78,79,80
    
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
  


  // ----- Create Grid

  function createGrid(playerStartingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerStartingPosition)
    addAlien(aliensStartingPosition)
  }
  // ---- Start Game function


  function startGame() {

  }




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
    console.log(playerCurrentPosition)
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
    const leftSide = aliensStartingPosition[0] % height !== 2.300000000000008
    const rightSide = aliensStartingPosition[aliensStartingPosition.length - 1] % height !== 22.300000000000008
    removeAlien()

    for (let i = 0; i < aliensStartingPosition.length; i++) {
      aliensStartingPosition[i] += 1
    }

    addAlien
  }

  


  document.addEventListener('keydown', handlePlayerKey)

  createGrid(playerStartingPosition)



}

window.addEventListener('DOMContentLoaded', init)
