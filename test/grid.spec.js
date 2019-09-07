/**
 * a grid is a 2D array of cells
 */
const Grid = require('../simulator/grid');
const Cell = require('../simulator/cell');
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
        it('Should be a number', function() {
          grid.rows.should.be.a('number');
        });
      });
      describe('Columns', function() {
        it('Should contain a property columns', function() {
          grid.should.have.property('columns');
        });
        it('Should be a number', function() {
          grid.columns.should.be.a('number');
        });
      });
      describe('Cells', function() {
        it('Should contain a property cells', function() {
          grid.should.have.property('cells');
        });
        it('Should be an array', function() {
          grid.cells.should.be.an('array');
        });
      });
    });

    describe('Cells', function() {

    });
  });
  describe('Behavior', function() {
    describe('addCell', function() {
      it('Should have a function addCell', function() {
        grid.should.have.a.property('addCell');
      });
      it.skip('Should be able to add a Source', function() {
        const x = 1;
        const y = 2;
        const cell = new Cell(x, y);
        grid.addCell(x, y, cell);
        grid.cells[x, y].should.be.a('Cell');
      });
      it('Should be able to add a Sink');
      it('Should be able to add a lane segment');
      it('Should not allow x < 0');
      it('Should not allow x > number of columns');
      it('Should not allow y < 0');
      it('Should not allow x > number of rows');
    });
  });
});
