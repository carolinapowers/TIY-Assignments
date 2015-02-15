var assert = require('assert');


//function plus (A,B) {
//    if(A == "zero") {
//        return 0;
//    }else if (A == "one"){
//        return 1;
//    }else if (A == "two") {
//        return 2;
//    }else if (A == "three") {
//        return 3;
//    }else if (A == "four") {
//        return 4;
//    }
//}
//
//it('should add "zero" and "one"', function () {
//    assert.equal(plus("zero", "two"), 0);
//});    
//
//it('should add "one" and "two"', function () {
//    assert.equal(plus("one", "two"), 1);
//});
//
//it('should add "two" and "three"', function () {
//    assert.equal(plus("two", "three"), 2);
//});
//
//it('should add "three" and "four"', function () {
//    assert.equal(plus("three", "four"), 3);
//});
//
//it('should add "four" and "five"', function () {
//    assert.equal(plus("four", "five"), 4);
//});

//var stringNumbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];

function plus (A,B) {
    var stringNumbers = {
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
    
    return stringNumbers[B]; 
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