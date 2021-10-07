function init() {

  const grid = document.querySelector('.grid')
  const width = 15
  const cellCount = width * width
  const cells = []

  const alienClass = 'alien'
  const alienStartingPosition = 0
  let alienCurrentPosition = 0
  const aliens = [
    2,3,4,5,6,7,8,9,10,11,12,
    17,18,19,20,21,22,23,24,25
  ]

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      
    }
  }
  createGrid()
  

















}

window.addEventListener('DOMContentLoaded', init)
