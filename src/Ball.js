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
    if (this.x + this.sx + this.size > 1920) {
      this.sx = this.sx * -1;
    }
    if (this.x + this.sx - this.size < 0) {
      this.sx = this.sx * -1;
    }
    if (this.y + this.sy + this.size > 1080) {
      this.sy = this.sy * -1;
    }
    if (this.y + this.sy - this.size < 0) {
      this.sy = this.sy * -1;
    }

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
