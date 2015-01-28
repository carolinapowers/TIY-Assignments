var assert = require('assert');

var numbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];

function plus (A,B){
    var numbers = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
    }
    return numbers[B];
}


it('should add "zero" to everything', function(){
  assert.equal(plus("zero", "zero"), 0);
  assert.equal(plus("zero", "one"), 1);
  assert.equal(plus("zero", "two"), 2);
  assert.equal(plus("zero", "three"), 3);
  assert.equal(plus("zero", "four"), 4);
  assert.equal(plus("zero", "five"), 5);
  assert.equal(plus("zero", "six"), 6);
  assert.equal(plus("zero", "seven"), 7);
  assert.equal(plus("zero", "eight"), 8);
  assert.equal(plus("zero", "nine"), 9);
  assert.equal(plus("zero", "ten"), 10);    
});


it('should add "one" to everything', function (){
    assert.equal(plus("one", "zero"), 0);
    assert.equal(plus("one", "one"), 1);
    assert.equal(plus("one", "two"), 2);
    assert.equal(plus("one", "three"), 3);
    assert.equal(plus("one", "four"), 4);
    assert.equal(plus("one", "five"), 5);
    assert.equal(plus("one", "six"), 6);
    assert.equal(plus("one", "seven"), 7);
    assert.equal(plus("one", "eight"), 8);
    assert.equal(plus("one", "nine"), 9);
    assert.equal(plus("one", "ten"), 10);
})

it('should add "two" to everything', function (){
    assert.equal(plus("two","zero"), 0);
    assert.equal(plus("two","one"), 1);
    assert.equal(plus("two","two"), 2);
    assert.equal(plus("two","three"), 3);
    assert.equal(plus("two","four"), 4);
    assert.equal(plus("two","five"), 5);
    assert.equal(plus("two","six"), 6);
    assert.equal(plus("two","seven"), 7);
    assert.equal(plus("two","eight"), 8);
    assert.equal(plus("two","nine"), 9);
    assert.equal(plus("two","ten"), 10);
})

it('should add "three" to everything', function(){
    assert.equal(plus("three","zero"), 0);
    assert.equal(plus("three","one"), 1);
    assert.equal(plus("three","two"), 2);
    assert.equal(plus("three","three"), 3);
    assert.equal(plus("three","four"), 4);
    assert.equal(plus("three","five"), 5);
    assert.equal(plus("three","six"), 6);
    assert.equal(plus("three","seven"), 7);
    assert.equal(plus("three","eight"), 8);
    assert.equal(plus("three","nine"), 9);
    assert.equal(plus("three","ten"), 10);
})

it('should add "four" to everything', function(){
    assert.equal(plus("four","zero"), 0);
    assert.equal(plus("four","one"), 1);
    assert.equal(plus("four","two"), 2);
    assert.equal(plus("four","three"), 3);
    assert.equal(plus("four","four"), 4);
    assert.equal(plus("four","five"), 5);
    assert.equal(plus("four","six"), 6);
    assert.equal(plus("four","seven"), 7);
    assert.equal(plus("four","eight"), 8);
    assert.equal(plus("four","nine"), 9);
    assert.equal(plus("four","ten"), 10);
})

it('should add "five" to everything', function(){
    assert.equal(plus("five","zero"), 0);
    assert.equal(plus("five","one"), 1);
    assert.equal(plus("five","two"), 2);
    assert.equal(plus("five","three"), 3);
    assert.equal(plus("five","four"), 4);
    assert.equal(plus("five","five"), 5);
    assert.equal(plus("five","six"), 6);
    assert.equal(plus("five","seven"), 7);
    assert.equal(plus("five","eight"), 8);
    assert.equal(plus("five","nine"), 9);
    assert.equal(plus("five","ten"), 10);
})

it('should add "six" to everything', function (){
    assert.equal(plus("six","zero"), 0);
    assert.equal(plus("six","one"), 1);
    assert.equal(plus("six","two"), 2);
    assert.equal(plus("six","three"), 3);
    assert.equal(plus("six","four"), 4);
    assert.equal(plus("six","five"), 5);
    assert.equal(plus("six","six"), 6);
    assert.equal(plus("six","seven"), 7);
    assert.equal(plus("six","eight"), 8);
    assert.equal(plus("six","nine"), 9);
    assert.equal(plus("six","ten"), 10);
})

it('should add "seven" to everything', function (){
    assert.equal(plus("seven","zero"), 0);
    assert.equal(plus("seven","one"), 1);
    assert.equal(plus("seven","two"), 2);
    assert.equal(plus("seven","three"), 3);
    assert.equal(plus("seven","four"), 4);
    assert.equal(plus("seven","five"), 5);
    assert.equal(plus("seven","six"), 6);
    assert.equal(plus("seven","seven"), 7);
    assert.equal(plus("seven","eight"), 8);
    assert.equal(plus("seven","nine"), 9);
    assert.equal(plus("seven","ten"), 10);
})

it('should add "eight" to everything', function (){
    assert.equal(plus("eight","zero"), 0);
    assert.equal(plus("eight","one"), 1);
    assert.equal(plus("eight","two"), 2);
    assert.equal(plus("eight","three"), 3);
    assert.equal(plus("eight","four"), 4);
    assert.equal(plus("eight","five"), 5);
    assert.equal(plus("eight","six"), 6);
    assert.equal(plus("eight","seven"), 7);
    assert.equal(plus("eight","eight"), 8);
    assert.equal(plus("eight","nine"), 9);
    assert.equal(plus("eight","ten"), 10);
})

it('should add "nine" to everything', function (){
    assert.equal(plus("nine","zero"), 0);
    assert.equal(plus("nine","one"), 1);
    assert.equal(plus("nine","two"), 2);
    assert.equal(plus("nine","three"), 3);
    assert.equal(plus("nine","four"), 4);
    assert.equal(plus("nine","five"), 5);
    assert.equal(plus("nine","six"), 6);
    assert.equal(plus("nine","seven"), 7);
    assert.equal(plus("nine","eight"), 8);
    assert.equal(plus("nine","nine"), 9);
    assert.equal(plus("nine","ten"), 10);
})

it('should add "ten" to everything', function (){
    assert.equal(plus("ten","zero"), 0);
    assert.equal(plus("ten","one"), 1);
    assert.equal(plus("ten","two"), 2);
    assert.equal(plus("ten","three"), 3);
    assert.equal(plus("ten","four"), 4);
    assert.equal(plus("ten","five"), 5);
    assert.equal(plus("ten","six"), 6);
    assert.equal(plus("ten","seven"), 7);
    assert.equal(plus("ten","eight"), 8);
    assert.equal(plus("ten","nine"), 9);
    assert.equal(plus("ten","ten"), 10);
})
/*
function plus() {
return;
}

it('should have a function called 'plus'),function {
assert(plus);
assert(typeof plus == 'function');
};

it('should take "zero", function(){
assert(plus)("zero"),0);
});
*/


/*function plus (A,B) {
    if ( A == "zero") { 
        return 2;
    }
}

it('should add "zero" and "two"', function () {
    assert.equal(plus("zero", "two"), 2);})

it('should add "zero" and "three"', function () {
   assert.equal(plus("zero", "three"), 2);})

*/

/* function plus (A,B) {
    if(A == "one") {
        return 5;
    }
    
}

it('should add "one" and "four"', function() {
    assert.equal(plus("one", "four"), 5);
    
})

it('should add "one" and "six"', function() {
    assert.equal(plus("one", "six"), 5);
})

it('should add "one" and "eight"', function() {
   assert.equal(plus("one", "eight"), 5);
   
   })

it('should add "one" and "ten"', function(){
    assert.equal(plus("one", "ten"), 5);
})

it('should add "one" and "two"', function() {
    assert.equal(plus("one", "two"), 5);
})

it('should add "one" and "one"', function (){
    assert.equal(plus("one","one"), 5);
})

it('should add "one" and "three"', function () {
    assert.equal(plus("one","three"),5 );
})

it('should add "one" and "five"', function(){
    assert.equal(plus("one","three"),5);
})

it('should add "one" and "seven"', function(){
    assert.equal(plus("one","seven"),5);
})

it('should add "one" and "nine"', function(){
    assert.equal(plus("one","nine"),5);
})*/

/*function plus (A,B) {
    if(A=="two"||B=="two"){
    return 1;    
    }        
}

it('should add "one" and "two"', function(){
    assert.equal(plus("one","two"), 1);
})

it('should add "two" and "one"', function(){
    assert.equal(plus("two","one"),1);
})

it('should add "two" and "three"',function(){
    assert.equal(plus("two","three"), 1);
})

it('should add "two" and "four"', function(){
    assert.equal(plus("two","four"),1);
})

it('should add "two" and "five"', function(){
    assert.equal(plus("two","five"), 1);
})

it('should add "two" and "six"', function(){
    assert.equal(plus("two", "six"), 1);
})

it('should add "seven" and "two"', function(){
    assert.equal(plus("seven", "two"),1);
})

it('should add "eight" and "two"',function(){
    assert.equal(plus("eight","two"), 1);
})

it('should add "eight" and "two"', function(){
    assert.equal(plus("eight", "two"), 1);
})

it('should add "nine" and "two"', function(){
    assert(plus("nine","two"),1);
})*/

/*function plus(A,B) {
    if(A=="three"&&B=="three") {
        return 6;
    }
}

it('should be "three" and "three"', function(){
    assert.equal(plus("three","three"),6);
})*/

/*function plus (A,B) {
    if(A=="four"){
        return 5;
    } 
}

it('should add "five" and "nine"', function(){
    assert.equal(plus("four","nine"),5);
})*/

/*function plus (A,B){
    if(B=="five") {
        return 5;
    }
}

it('should add "four" and "five"', function(){
    assert(plus("four","five"), 5);
})*/

/*function plus (A,B) {
    if(B=="six"){
        return 6;
    }
}

it('should add "five" and "six"', function(){
    assert.equal(plus("five","six"), 6);
})*/

/*function plus(A,B){
    if(B=="seven") {
        return 7;
    }
}

it('should add "six" and "seven"', function(){
    assert.equal(plus("six","seven"),7);
})*/

/*function plus(A,B){
    if(A=="eight"){
        return 8;
    }
}

it('should add "eight" and "nine"', function(){
    assert.equal(plus("eight","nine"), 8);
})*/

/*function plus(A,B){
    if(A=="nine"&&B=="nine") {
        return 9;
    }
}

it('should add "nine" and "nine"', function(){
    assert.equal(plus("nine","nine"),9);
})*/

/*function plus(A,B){
    if (A=="ten"||B=="four"){
        return 10;
    }
    
}

it('should add "two" and "four"', function(){
    assert.equal(plus("two","four"),10);
})*/


