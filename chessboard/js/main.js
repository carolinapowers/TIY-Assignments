
 var vm = new Vue({

  el: '#chessboard',
   data: {
     message: 'Hello from Vue'
   },
 });



document.write('<div class="button-group">');
    document.write('<i class="fa fa-angle-double-left fa-lg" onClick="rewind()"></i>');
    document.write('<i class="fa fa-angle-left fa-lg" onClick="movePieceBack()"></i>');
    document.write('<i class="fa fa-angle-right fa-lg" onClick="movePiece()"></i>');
    document.write('<i class="fa fa-angle-double-right fa-lg" onclick="fastForward()"></i>');
    document.write('</div>');