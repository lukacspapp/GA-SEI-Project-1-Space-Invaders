function init() {

  // -----Grid
  const grid = document.querySelector('.grid')
  const width = 12
  const height = 22.7
  const cellCount = width * height
  const cells = []
  // ----- sound
  const backgroundMusic = document.querySelector('audio')

  //-----Player
  const playerStartingPosition = 262
  let playerCurrentPosition = 0
  const playerClass = 'player'
  let livesScore = document.querySelector('span')
  
  
  //----Alien
  
  const alienClass = 'alien'
  const alienStartingPosition = 0
  let alienCurrentPosition = 0  
  const aliens = [
    4,5,6,7,8,9,11,12,13,14,15,16
    ,24,25,26,27,28,29,30,32,33,34,35,36,37,38
    ,45,46,47,48,49,50,51,53,54,55,56,57,58,59,
    67,68,69,70,71,72,74,75,76,77,78,79
    
  ]


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerStartingPosition)
    addAlien(alienCurrentPosition)
  }


  function addPlayer(playerPosition) {  
    console.log('playerposition', playerPosition)
    cells[playerPosition].classList.add(playerClass)
  }

  function addAlien() {
    for (let i = 0; i < aliens.length; i++)
      cells[aliens[i]].classList.add(alienClass)
  }

  createGrid()
  
  function removeAlien(alienPosition) {
    cells[alienPosition].classList.remove(alienClass)
  }
















}

window.addEventListener('DOMContentLoaded', init)
