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
  addCell(x, y, cell) {
    this.cells[y][x] = cell;
  }
}

module.exports = Grid;
