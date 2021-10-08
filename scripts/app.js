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
  let playerCurrentPosition = 262
  const playerClass = 'player'


  //-----Livescore
  let livesScore = document.querySelector('span')
  
  
  // //----Alien
  
  // const alienClass = 'alien'
  // const alienStartingPosition = 4
  // let alienCurrentPosition = 0  
  // const aliens = [ 4
  //   5,6,7,8,9,11,12,13,14,15,16
  //   ,24,25,26,27,28,29,30,32,33,34,35,36,37,38
  //   ,45,46,47,48,49,50,51,53,54,55,56,57,58,59,
  //   67,68,69,70,71,72,74,75,76,77,78,79
    
  // ]

  // // -----

  function createGrid(playerStartingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerStartingPosition)
    // addAlien(alienStartingPosition)
  }

  // ---- Add Player and Remove Player 
  function addPlayer(playerPosition) {  
    // console.log('playerposition', playerPosition)
    cells[playerPosition].classList.add(playerClass)
  }
  
  function removePlayer(playerPosition) {  
    cells[playerPosition].classList.remove(playerClass)
  }
  // -----------------------------------

  
  // // ---- Add Alien and Remove Alien
  // function addAlien() {
  //   for (let i = 0; i < aliens.length; i++)
  //     cells[aliens].classList.add(alienClass)
  // }

  // function removeAlien() {
  //   cells[aliens].classList.remove(alienClass)
  // }
  // // ---------------------------------


  function handlePlayerKey(event) {
    console.log(playerCurrentPosition)
    const key = event.keyCode
    console.log('playerCurrentPosition % heigth', playerCurrentPosition % height)



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
  
  






  document.addEventListener('keyup', handlePlayerKey)

  createGrid(playerStartingPosition)



}

window.addEventListener('DOMContentLoaded', init)
