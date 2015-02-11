var assert = require ('assert');


function Piece (color, name, position) {
    this._color = color;
    this._name = name;
    this._position = position;
}

Piece.prototype = {
    position: function () {
        return this.position;
    },
    color: function () {
        return this.color;
},
    name: function () {
        return  this.name;
    },
    abbrev: function () {
        return this.name.substring(0,1);
    },
    toString: function () {
        return this.color + " " + this.name + " " + this.position;
    },
    toHTML: function () {
        pieces = [ ]
        return 
    }
        
    
    }


var Pawn = new Piece ('white', 'Pawn', 'C2');
var Queen = new Piece ('white', 'Queen', 'D1' );

function Knight (color, queenside) {
    Piece.call(this, color, Knight, position, queenside);
}

Knight.prototype = new Piece('white', 'Knight','E1', true);
console.log (Knight);

console.log(Pawn);
console.log(Queen);


it('should have Piece', function () {
  assert(Piece);      
});

it('should have type of piece as a function', function () { 
  assert(typeof Piece == "function");
});
   
it('should have color', function () {
  assert("color");  
}); 

it('should have type of color as a string', function () {
  assert(typeof "color" == "string");  
}); 


it('should have abbrev', function () {
   assert("abbrev"); 
});

it('should have abbrev as type of string', function () {
   assert(typeof "abbrev" ==  "string"); 
});


it('should have Pawn', function () {
   assert(Pawn);
    
   assert(Pawn.name, "Pawn");    
});

it('should have typeof Pawn = object', function () {
   assert(typeof Pawn == "object");   
});

it('should have Pawn', function () {   
   assert(Pawn.position(), "C2"); 
});


it('should have Pawn', function () {   
    assert(Pawn.color, 2);
});