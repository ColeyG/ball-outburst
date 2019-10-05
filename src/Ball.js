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
    this.alive = 0;
  }

  getX = () => this.x

  getY = () => this.y

  render = () => {
    this.update();
    // Update to ensure this method renders ball
  }
}

export default Ball;
