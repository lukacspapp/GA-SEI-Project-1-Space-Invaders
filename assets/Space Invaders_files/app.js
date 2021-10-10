function init() {

  // -----Grid
  const grid = document.querySelector('.grid')
  const width = 12
  const height = 22.7
  const cellCount = width * height
  const cells = []

  // -----Alien Movement
    
  let right = 1
  let alienInerwall



  

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


  const alienClass = 'alien'  
  let aliensCurrentPositon
  const aliensStartingPosition = [3
    // 4,5,6,7,8,9,11,12,13,14,15,16
    // ,25,26,27,28,29,30,32,33,34,35,36,37
    // ,46,47,48,49,50,51,53,54,55,56,57,58,
    // 67,68,69,70,71,72,74,75,76,77,78,79
    // ,80,17,3,66
    
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
    

    addPlayer(playerStartingPosition)
    addAlien(aliensStartingPosition)
    alienMovement()
    let alienInterwall = setInterval(alienMovement, 100) 


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
    const rightSide = aliensStartingPosition[0] % 21.300000000000008 === 20
    const leftSide = aliensStartingPosition[0] % 21.300000000000008  === 21

    removeAlien()

    if (rightSide) {
      for (let i = 0; i < aliensStartingPosition.length; i++) {
        aliensStartingPosition[0] += 21
        right = -1
        console.log(aliensStartingPosition[i] % width - 1)
      }
    }
    

    for (let i = 0; i < aliensStartingPosition.length; i++) {
      aliensStartingPosition[i] += right 
      
    
      console.log(aliensStartingPosition[i] % 21.300000000000008) 
    }

    addAlien()
    // setInterval(alienMovement, 2000)  
  }





  document.addEventListener('keydown', handlePlayerKey)

  createGrid(playerStartingPosition)
  startButton.addEventListener('click', startGame, alienMovement)


}

window.addEventListener('DOMContentLoaded', init)
