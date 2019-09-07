const Errors = require('./errors');
/**
 * Grid is made of multiple cells
 */
class Grid {
  /**
   * builds a new grid
   * @param {number} rows
   * @param {number} columns
   */
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.cells = [];
    const emptyRow = new Array(this.columns);
    for (let row = 0; row < this.rows; row++) {
      this.cells[row] = emptyRow;
    }
  }

  /**
   * places a cell in the grid
   * @param {number} x coordinate of the cell
   * @param {number} y coordinate of the cell
   * @param {Cell} cell to be added
   */
  setCell(x, y, cell) {
    if (x < 0 || x > this.columns || y < 0 || y > this.rows) {
      throw (Errors.invalidValue);
    }
    this.cells[x][y] = cell;
  }
}

module.exports = Grid;
