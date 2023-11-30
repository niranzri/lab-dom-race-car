class Player {
    // method for creating&initializing an object of class Player
    constructor(gameScreen, left, top, width, height, imageSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img"); // we create an HTML image element

        this.element.src = imageSrc;
        this.element.style.position = "absolute";
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;

        this.gameScreen.appendChild(this.element); // ads the player instance as a child node of gameScreen
    }

    move() { 
        // updates player's car position based on directionX & directionY
        this.left += this.directionX;
        this.top += this.directionY;

        //ensure the player's car stays within the game screen
        // left margin
        if (this.left < 60) { 
            this.left = 60;
        }

        // right margin
        if (this.left > this.gameScreen.offsetWidth - this.width - 60) {
            this.left = this.gameScreen.offsetWidth - this.width - 60;
        }

        // top margin
        if (this.top <= 0) {
            this.top = 0;
        }

        // bottom margin
        if (this.top > this.gameScreen.offsetHeight - this.height) {
            this.top = this.gameScreen.offsetHeight - this.height;
        }

        this.updatePosition();
    }

    updatePosition() { // updates the player's car position on the screen
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        /* getBoundingClientRect() method informs us about the size of an element
        and its position relative to the viewport */
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
    }

}