module.exports = class Room {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.startXroom = 0;
    this.endXroom = this.startXroom + Number(width);
    this.startYroom = 0;
    this.endYroom = this.startYroom + Number(length);
  }
  getStartXroom() {
    return this.startXroom;
  }
  getEndXroom() {
    return this.endXroom;
  }
  getStartYroom() {
    return this.startYroom;
  }
  getEndYroom() {
    return this.endYroom;
  }
  setStartXroom(newStartXroom) {
    this.startXroom = newStartXroom;
  }
  setStartYroom(newStartYroom) {
    this.startYroom = newStartYroom;
  }
  setEndXroom(newEndXroom) {
    this.endXroom = newEndXroom;
  }
  setEndYroom(newEndYroom) {
    this.endYroom = newEndYroom;
  }
};
