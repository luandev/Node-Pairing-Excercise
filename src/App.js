const calculateBombs = (row, col, input) => {
  let num_of_bombs = 0;

  if(input[row][col] === '*') {
    return `*`;
  }

  for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
    for (let colIndex = -1; colIndex < 2; colIndex++) {
      const rIndex = row + rowIndex;
      const cIndex = col + colIndex;
      if (input[rIndex] && input[rIndex][cIndex]) {
        if(input[rIndex][cIndex] === '*') {
          num_of_bombs++;
        }
      }
    }
  }
  return `${num_of_bombs}`;
};

const map = (input) => {
  let rows = [...input];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      rows[i][j] = calculateBombs(i, j, input);
    }
  }

  return rows;
};

export default map;
