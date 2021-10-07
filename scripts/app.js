function init() {

  // -----Grid
  const grid = document.querySelector('.grid')
  const width = 15
  const cellCount = width * width
  const cells = []
  //-----Player
  const playerStartingPosition = 217
  let playerCurrentPosition = 0
  const playerClass = 'player'
  let livesScore = document.querySelector('span')
  
  
  //----Alien
  
  const alienClass = 'alien'
  const alienStartingPosition = 0
  let alienCurrentPosition = 0  
  const aliens = [
    2,3,4,5,6,8,9,10,11,12,
    16,17,18,19,20,21,23,24,25,26,27,28,
    31,32,33,34,35,36,38,39,40,41,42,43,
    47,48,49,50,51,53,54,55,56,57
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
