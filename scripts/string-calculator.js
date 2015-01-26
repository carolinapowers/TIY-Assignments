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

function plus(A,B) {
    if(A=="three"&&B=="three") {
        return 6;
    }
}

it('should be "three" and "three"', function(){
    assert.equal(plus("three","three"),6);
})