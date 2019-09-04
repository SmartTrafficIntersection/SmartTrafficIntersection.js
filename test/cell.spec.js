/**
 * a cell will contain a road segment, a source, a sink, or a traffic controller
 * a group of cells makes up a grid
 * cells should subscribe to events from adjacent cells
 */
const Cell = require('../simulator/cell');
const chai = require('chai');
chai.use(require('chai-events'));
chai.use(require('chai-as-promised'));

describe('Cell', function() {
  const x = 10;
  const y = 5;
  const cell = new Cell(x, y);
  describe('Properties', function() {
    describe('Event Emitter', function() {
      it('Should contain a property eventEmitter', function() {
        cell.should.have.property('eventEmitter');
      });
    });
    describe('X Coordinate', function() {

    });
    describe('Y Coordinate', function() {

    });
  });
  describe('Behaviour', function() {

  });
});
