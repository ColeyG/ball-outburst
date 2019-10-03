class Ball {
  constructor(alive, x, y, size, sx, sy) {
    this.alive = alive;
    this.x = x;
    this.y = y;
    this.size = size;
    this.sx = sx;
    this.sy = sy;
    this.color = this.randomColor();
  }

  randomColor = () => Math.random() * 360

  update = () => {
    this.x = this.x + this.sx;
    this.y = this.y + this.sy;
  }

  destroy = () => {
    console.log('asdf');
    this.alive = 0;
  }

  getX = () => this.x

  getY = () => this.y

  render = () => {
    this.update();

    const ball = document.createElement('div');
    ball.className = 'ball';

    ball.style.top = `${this.y - (this.size / 2)}px`;
    ball.style.left = `${this.x - (this.size / 2)}px`;

    ball.style.width = `${this.size}px`;
    ball.style.height = `${this.size}px`;
    ball.style.backgroundColor = this.color;

    return ball;
  }
}

export default Ball;
