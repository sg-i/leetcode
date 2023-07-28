/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const checkRows = () => {
    for (let i = 0; i < 9; i++) {
      const row = board[i];
      let digits = [];
      for (const element of row) {
        if (element !== '.') {
          if (digits.includes(element)) {
            return false;
          } else {
            digits.push(element);
          }
        }
      }
    }
    return true;
  };
  const checkColumns = () => {
    for (let c = 0; c < 9; c++) {
      let column = [];
      for (let r = 0; r < 9; r++) {
        column.push(board[r][c]);
      }
      let digits = [];
      for (const element of column) {
        if (element !== '.') {
          if (digits.includes(element)) {
            return false;
          } else {
            digits.push(element);
          }
        }
      }
    }
    return true;
  };
  const checkBoxes = () => {
    for (let br = 0; br < 3; br++) {
      for (let b = 0; b < 3; b++) {
        let digits = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            const element = board[br * 3 + i][b * 3 + j];
            if (element != '.') {
              if (digits.includes(element)) {
                return false;
              } else {
                digits.push(element);
              }
            }
          }
        }
      }
    }
    return true;
  };

  if (!checkRows()) return false;
  if (!checkColumns()) return false;
  if (!checkBoxes()) return false;
  return true;
};
let board = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
console.log(isValidSudoku(board));
