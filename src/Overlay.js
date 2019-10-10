class Overlay {
  constructor(game) {
    this.game = game;
    this.overlay = document.querySelector('.overlay');
    this.started = false;
    this.score = 0;
  }

  load() {
    this.overlay.style.opacity = 1;
    setTimeout(() => {
      this.game.gameState = {
        paused: false,
      };
    }, 1000);
  }

  start() {
    this.updateScore();
    this.started = true;
  }

  updateScore() {
    while (this.overlay.firstChild) {
      this.overlay.removeChild(this.overlay.firstChild);
    }
    this.overlay.style.justifyContent = 'start';
    const scoreArea = document.createElement('p');
    const score = document.createTextNode(`Score: ${this.score}`);
    scoreArea.appendChild(score);
    scoreArea.className = 'score';
    this.overlay.appendChild(scoreArea);
  }

  scored() {
    this.score++;
    this.updateScore();
  }
}

export default Overlay;
