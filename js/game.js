class Game {
    constructor() { // method for creating&initializing an object of class Game
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("end-game");
        // class Player(gameScreen, left, top, width, height, imageSrc);
        this.player = new Player(this.gameScreen, 290, 450, 100, 150, "./images/car.png");
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start() { // method for starting the game 
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "hidden";
        this.gameScreen.style.display = "block";
        this.gameLoop();

    }

    gameLoop() { // method for running the game 
        if (this.gameIsOver) {
            return; // if gameIsOver is true, the game loop stops here.
        }

        this.update();
        window.requestAnimationFrame(() => this.gameLoop()); /* tells the browser to call the 
        callback function gameLoop() recursively at the frequency of the display refresh rate */
    }

    update() {
        this.player.move();
    }
}