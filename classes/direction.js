module.exports = class Direction {
  constructor(direction) {
    this.direction= direction;
  }
   getDirection() {
    return this.direction;
  }
  setDirection(newDirection) {
    this.direction = newDirection;
  }
}