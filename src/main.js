import '../styles/reset.css';
import '../styles/main.scss';
import './resize';
import Ball from './Ball';

class Game {
  constructor() {
    this.game = document.querySelector('#game');
    this.balls = [new Ball(true, 1920 / 2, 1080 / 2, 100, 0, 0)];
    this.canvas = this.game.getContext('2d');
    this.game.addEventListener('mousemove', this.mouseMove, false);
    this.game.addEventListener('click', this.mouseClick, false);
    this.mouse = {
      x: 0,
      y: 0,
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
      if (Math.sqrt(xDist * xDist + yDist * yDist) < ball.size) {
        console.log('clicked');
        ball.alive = false;
      }
    });
  }

  gameRender = () => {
    requestAnimationFrame(this.gameRender);
    this.canvas.clearRect(0, 0, this.game.width, this.game.height);
    this.balls.forEach((ball) => {
      if (ball.alive === true) {
        this.canvas.beginPath();
        this.canvas.arc(ball.getX(), ball.getY(), ball.size, 0, 2 * Math.PI);
        this.canvas.fillStyle = `hsl(${ball.color}, 50%, 50%)`;
        this.canvas.fill();
      }
    });
  }
}

const game = new Game();
game.gameRender();
