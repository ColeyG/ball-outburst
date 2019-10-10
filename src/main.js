import '../styles/reset.css';
import '../styles/main.scss';
import './resize';
import Ball from './Ball';
import Overlay from './Overlay';

class Game {
  constructor(overlay) {
    this.game = document.querySelector('#game');
    this.balls = [new Ball(1920 / 2, 1080 / 2, 100, 0, 0, { firstBall: true })];
    this.canvas = this.game.getContext('2d');
    this.game.addEventListener('mousemove', this.mouseMove, false);
    this.game.addEventListener('click', this.mouseClick, false);
    this.gameState = {
      paused: true,
      started: false,
    };
    this.overlay = new Overlay(this);
    this.overlay.load();
    this.mouse = {
      x: 1920 / 2,
      y: 1080 / 2,
    };
    this.config = {
      minSpeed: 5,
      maxSpeed: 15,
    };
  }

  mouseMove = (event) => {
    this.mouse.x = (event.clientX / this.game.dataset.gameSizeCoefficient) - parseInt(this.game.dataset.marginLeft.replace('px', ''), 10) / 2 / this.game.dataset.gameSizeCoefficient;
    this.mouse.y = (event.clientY / this.game.dataset.gameSizeCoefficient) - parseInt(this.game.dataset.marginTop.replace('px', ''), 10) / 2 / this.game.dataset.gameSizeCoefficient;
  }

  mouseClick = () => {
    this.balls.forEach((ball) => {
      const xDist = ball.x - this.mouse.x;
      const yDist = ball.y - this.mouse.y;
      if (!this.gameState.paused) {
        if (Math.sqrt(xDist * xDist + yDist * yDist) < ball.size) {
          console.log(`Popped a ball at: X: ${ball.x} Y: ${ball.y}`);
          this.overlay.scored();
          this.createBall(ball.x, ball.y);
          this.createBall(ball.x, ball.y);
          ball.alive = false;
        }
        if (this.overlay.started === false) {
          this.overlay.start();
        }
      }
    });
  }

  createBall = (x, y) => {
    let ranSpeedX = Math.random();
    let ranSpeedY = 1 - ranSpeedX;
    ranSpeedX = (ranSpeedX * (this.config.maxSpeed - this.config.minSpeed)) + this.config.minSpeed;
    ranSpeedY = (ranSpeedY * (this.config.maxSpeed - this.config.minSpeed)) + this.config.minSpeed;

    // Random directions
    ranSpeedX = Math.random() < 0.5 ? -1 * ranSpeedX : 1 * ranSpeedX;
    ranSpeedY = Math.random() < 0.5 ? -1 * ranSpeedY : 1 * ranSpeedY;

    this.balls.push(new Ball(x, y, 1, ranSpeedX, ranSpeedY));
  }

  cleanUpBalls = () => {
    this.balls.forEach((ball, index) => {
      if (ball.alive === false) {
        this.balls.splice(index, 1);
      }
    });
  }

  gameRender = () => {
    requestAnimationFrame(this.gameRender);
    this.cleanUpBalls();
    this.canvas.clearRect(0, 0, this.game.width, this.game.height);
    this.balls.forEach((ball) => {
      if (ball.alive === true) {
        ball.render(this.canvas);
      }
    });
  }
}

const game = new Game();
game.gameRender();
