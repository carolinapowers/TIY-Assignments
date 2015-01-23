var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

//Move King's Pawn forward 2

board [4][4] = board [6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

//Move Q's P forward 2
board [3][3] = board [1][3];
board[1][3] = ' ';
console.log(board.join('\n'));
