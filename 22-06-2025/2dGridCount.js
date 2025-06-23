function gridCount(matrix){
    let count = 0;
    let coordinates = [];
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0;col < matrix[row].length; col++){
            if (matrix[row][col] == 'X'){
                count++;
                coordinates.push([row, col]);
            }
        }
    }
    console.log(`Count: ${count}`);
    console.log("coordinates:");
    for (let row of coordinates){
        console.log(row);
    }
}

const grid = [
  ['X', 'x', '',  '',  'X'],
  ['',  '',  'X', 'x', ''],
  ['x', 'X', '',  '',  ''],
  ['X', '',  'x', '',  'X'],
  ['',  '',  '',  '',  'X']
];

gridCount(grid);