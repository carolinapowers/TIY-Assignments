var assert = require('assert');

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

function plus (A,B) {
    
    return stringNumbers[A];
}

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


it('should add "zero" and "one"', function () {
    assert.equal(plus("zero", "two"), 0);
});    

it('should add "one" and "two"', function () {
    assert.equal(plus("one", "two"), 1);
});

it('should add "two" and "three"', function () {
    assert.equal(plus("two", "three"), 2);
});

it('should add "three" and "four"', function () {
    assert.equal(plus("three", "four"), 3);
});

it('should add "four" and "five"', function () {
    assert.equal(plus("four", "five"), 4);
});




function minus (A,B) {
    return stringNumbers[B];  
}


it('should subtract "two" and "one"', function () {
    assert.equal(minus("two","one"), 1);
});

it('should subtract "three" and "two"', function () {
    assert.equal(minus("three","two"), 2);
});

it('should subtract "three" and "two"', function () {
    assert.equal(minus("four","three"), 3);
});




function toNumber (A,B) {
    return stringNumbers[B]; 
}



it('should add "zero" to everything', function(){
  assert.equal(toNumber("zero", "zero"), 0);
  assert.equal(toNumber("zero", "one"), 1);
  assert.equal(toNumber("zero", "two"), 2);
  assert.equal(toNumber("zero", "three"), 3);
  assert.equal(toNumber("zero", "four"), 4);
  assert.equal(toNumber("zero", "five"), 5);
  assert.equal(toNumber("zero", "six"), 6);
  assert.equal(toNumber("zero", "seven"), 7);
  assert.equal(toNumber("zero", "eight"), 8);
  assert.equal(toNumber("zero", "nine"), 9);
  assert.equal(toNumber("zero", "ten"), 10);    
});

it('should add "one" to everything', function (){
    assert.equal(toNumber("one", "zero"), 0);
    assert.equal(toNumber("one", "one"), 1);
    assert.equal(toNumber("one", "two"), 2);
    assert.equal(toNumber("one", "three"), 3);
    assert.equal(toNumber("one", "four"), 4);
    assert.equal(toNumber("one", "five"), 5);
    assert.equal(toNumber("one", "six"), 6);
    assert.equal(toNumber("one", "seven"), 7);
    assert.equal(toNumber("one", "eight"), 8);
    assert.equal(toNumber("one", "nine"), 9);
    assert.equal(toNumber("one", "ten"), 10);
})

it('should add "two" to everything', function (){
    assert.equal(toNumber("two","zero"), 0);
    assert.equal(toNumber("two","one"), 1);
    assert.equal(toNumber("two","two"), 2);
    assert.equal(toNumber("two","three"), 3);
    assert.equal(toNumber("two","four"), 4);
    assert.equal(toNumber("two","five"), 5);
    assert.equal(toNumber("two","six"), 6);
    assert.equal(toNumber("two","seven"), 7);
    assert.equal(toNumber("two","eight"), 8);
    assert.equal(toNumber("two","nine"), 9);
    assert.equal(toNumber("two","ten"), 10);
})

it('should add "three" to everything', function(){
    assert.equal(toNumber("three","zero"), 0);
    assert.equal(toNumber("three","one"), 1);
    assert.equal(toNumber("three","two"), 2);
    assert.equal(toNumber("three","three"), 3);
    assert.equal(toNumber("three","four"), 4);
    assert.equal(toNumber("three","five"), 5);
    assert.equal(toNumber("three","six"), 6);
    assert.equal(toNumber("three","seven"), 7);
    assert.equal(toNumber("three","eight"), 8);
    assert.equal(toNumber("three","nine"), 9);
    assert.equal(toNumber("three","ten"), 10);
})

it('should add "four" to everything', function(){
    assert.equal(toNumber("four","zero"), 0);
    assert.equal(toNumber("four","one"), 1);
    assert.equal(toNumber("four","two"), 2);
    assert.equal(toNumber("four","three"), 3);
    assert.equal(toNumber("four","four"), 4);
    assert.equal(toNumber("four","five"), 5);
    assert.equal(toNumber("four","six"), 6);
    assert.equal(toNumber("four","seven"), 7);
    assert.equal(toNumber("four","eight"), 8);
    assert.equal(toNumber("four","nine"), 9);
    assert.equal(toNumber("four","ten"), 10);
})

it('should add "five" to everything', function(){
    assert.equal(toNumber("five","zero"), 0);
    assert.equal(toNumber("five","one"), 1);
    assert.equal(toNumber("five","two"), 2);
    assert.equal(toNumber("five","three"), 3);
    assert.equal(toNumber("five","four"), 4);
    assert.equal(toNumber("five","five"), 5);
    assert.equal(toNumber("five","six"), 6);
    assert.equal(toNumber("five","seven"), 7);
    assert.equal(toNumber("five","eight"), 8);
    assert.equal(toNumber("five","nine"), 9);
    assert.equal(toNumber("five","ten"), 10);
})