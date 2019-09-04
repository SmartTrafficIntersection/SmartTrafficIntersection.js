/**
 * a grid is a 2D array of cells
 */
const Grid = require('../simulator/grid');
const chai = require('chai');
chai.use(require('chai-events'));
chai.use(require('chai-as-promised'));


describe('Grid', function() {
  const rows = 10;
  const columns = 5;
  const grid = new Grid(rows, columns);
  describe('Properties', function() {
    describe('Grid Size', function() {
      describe('Rows', function() {
        it('Should contain a property rows', function() {
          grid.should.have.property('rows');
        });
        it('Should be a number');
      });
      describe('Columns', function() {
        it('Should contain a property columns', function() {
          grid.should.have.property('columns');
        });
        it('Should be a number');
      });
    });

    describe('Cells', function() {

    });
  });
  describe('Behaviour', function() {

  });
});
