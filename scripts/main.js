var _ = require ('lodash')



function print(board){
    
var row = [7];
    
  
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){

      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print



//var board = [
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P'],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['p','p','p','p','p','p','p','p'],
//    ['r','n','b','q','k','b','n','r'] ];
//
//
//
//
//
//function print(board){
//    console.log(board.join('\n') + '\n\n');
//}
//
//print(board);
//
//
// function move(board, fromX, fromY, toX, toY){
//  board [toX][toY] = board [fromX][fromY];
//  board[fromX][fromY] = ' ';
//  console.log(board.join('\n') + '\n\n');
//}
//
//move(board,6,4,4,4);
//
//move(board,1,3,3,3);
//
//move(board,7,6,5,7);  

/*Move King's Pawn forward 2

board [4][4] = board [6][4];
board[6][4] = ' ';
console.log(board.join('\n') + '\n\n');//

/*Move Q's P forward 2
board [3][3] = board [1][3];
board[1][3] = ' ';
console.log(board.join('\n') + '\n\n');

//Move right n foward 2 right 1
board[5][7] = board [7][6];
board [7][6] = ' ';
console.log(board.join('\n') + '\n\n');*/
