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

  finish() {
    while (this.overlay.firstChild) {
      this.overlay.removeChild(this.overlay.firstChild);
    }
    this.overlay.style.justifyContent = 'center';
    const scoreArea = document.createElement('p');
    const score = document.createTextNode(`Final Score: ${this.score}`);
    scoreArea.appendChild(score);
    scoreArea.className = 'score-final';
    this.overlay.appendChild(scoreArea);
    const reset = document.createElement('a');
    const resetText = document.createTextNode('Reset');
    reset.appendChild(resetText);
    reset.href = '#';
    // eslint-disable-next-line no-restricted-globals
    reset.addEventListener('click', () => { location.reload(); }, false);
    this.overlay.appendChild(reset);
    this.overlay.style.pointerEvents = 'auto';
  }

  scored() {
    this.score++;
    this.updateScore();
  }
}

export default Overlay;
