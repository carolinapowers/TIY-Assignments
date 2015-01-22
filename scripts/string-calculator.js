var assert = require('assert');

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

function plus (A,B) {
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

it ('should add "one" and "one"', function (){
    assert.equal(plus("one","one"), 5);
})