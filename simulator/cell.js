const EventEmitter = require('events');

/**
 * Cell is the superclass of lane segments, sources and sinks
 */
class Cell {
  /**
   * build a new cell
   * @param {number} x coordinate
   * @param {number} y coordinate
   */
  constructor() {
    this.eventEmitter = new EventEmitter();
  }
}

module.exports = Cell;
