module.exports = class Dimentions {
  constructor(x,y) {
    this.startXcar= Number(x);
    this.startYcar= Number(y);
    this.endXcar = this.startXcar;
    this.endYcar = this.startYcar;
  }
  getStartXcar() {
    return this.startXcar;
  }
  getStartYcar() {
    return this.startYcar;
  }
  getEndXcar() {
    return this.endXcar;
  }
  getEndYcar() {
    return this.endYcar;
  }
  setStartXcar(newStartXcar) {
    this.startXcar = newStartXcar;
  }
  setStartYcar(newStartYcar) {
    this.startYcar = newStartYcar;
  }
  setEndXcar(newEndXcar) {
    this.endXcar = newEndXcar;
  }
  setEndYcar(newEndYcar) {
    this.endYcar = newEndYcar;
  }
}