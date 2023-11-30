window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    game = new Game(); // creates a new instance of class Game every time the start button is clicked
    console.log("start game");
    game.start(); // starts the game
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  /* adds an event listener to the document object for the keydown event, 
  which is fired when a key is pressed down. The second argument is an event handler,
  executed every time the keydown event occurs. */
  
  document.addEventListener("keydown", (event) => {
    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
      game.player.directionY = -1
    }
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      game.player.directionY = 1
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      game.player.directionX = -1
    }
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      game.player.directionX = 1
    }
  });

  /* adds an event listener for the keyup event, fired when we stop pressing a key.*/
  document.addEventListener('keyup', event => {
    if (
      event.code === 'ArrowUp' ||
      event.code === 'KeyW' ||
      event.code === 'ArrowDown' ||
      event.code === 'KeyS'
    ) {
      game.player.directionY = 0
    }
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'KeyA' ||
      event.code === 'ArrowRight' ||
      event.code === 'KeyD'
    ) {
      game.player.directionX = 0
    }
  })
 
};



