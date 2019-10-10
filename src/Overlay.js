class Overlay {
  constructor(game) {
    this.game = game;
    this.overlay = document.querySelector('.overlay');
  }

  load() {
    this.overlay.style.opacity = 1;
    setTimeout(() => {
      this.game.gameState = {
        paused: false,
        started: true,
      };
    }, 1000);
  }
}

export default Overlay;
