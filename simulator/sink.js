const Cell = require('./cell');
const uuidv1 = require('uuid/v1');

/**
 * Terminates traffic
 */
class Sink extends Cell {
  /**
   * Sink constructor
   * @param {string} name name of the sink
   * @param {number} inFlux capacity of the sink
   */
  constructor(name, inFlux) {
    super();
    this.id = uuidv1();
    this.name = name;
    this.inFlux = inFlux;
  }
}

module.exports = Sink;
