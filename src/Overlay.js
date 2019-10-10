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
    while (this.overlay.firstChild) {
      this.overlay.removeChild(this.overlay.firstChild);
    }
    this.started = true;
  }
}

export default Overlay;
