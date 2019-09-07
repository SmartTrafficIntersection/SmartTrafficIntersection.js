/**
 * a grid is a 2D array of cells
 */
const Grid = require('../simulator/grid');
const Cell = require('../simulator/cell');
const Sink = require('../simulator/sink');
const Segment = require('../simulator/segment');
const Source = require('../simulator/source');
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
    const x = 1;
    const y = 2;
    const outFlux = 3;
    const inFlux = 5;
    describe('addCell', function() {
      it('Should have a function addCell', function() {
        grid.should.have.property('addCell');
      });
      it('Should be able to add a Source', function() {
        const source = new Source('source', outFlux);
        grid.addCell(x, y, source);
        grid.cells[x][y].should.equal(source);
      });
      it('Should be able to add a Sink', function() {
        const sink = new Sink('sink', inFlux);
        grid.addCell(x, y, sink);
        grid.cells[x][y].should.equal(sink);
      });
      it('Should be able to add a lane segment', function() {
        const capacity = 10;
        const segment = new Segment('segment', capacity, inFlux, outFlux);
        grid.addCell(x, y, segment);
        grid.cells[x][y].should.equal(segment);
      });
      it('Should not allow x < 0', function() {
        const cell = new Cell();
        (function() {
          grid.addCell(-1, y, cell);
        }).should.throw();
      });
      it('Should not allow x > number of columns', function() {
        const cell = new Cell();
        (function() {
          grid.addCell(x, rows+2, cell);
        }).should.throw();
      });
      it('Should not allow y < 0', function() {
        const cell = new Cell();
        (function() {
          grid.addCell(x, -1, cell);
        }).should.throw();
      });
      it('Should not allow x > number of rows');
    });
  });
});
