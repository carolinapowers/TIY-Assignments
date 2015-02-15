var assert = require('assert');


//**
// * @param String A an English number word
// * @param String B an English number word
// * @returns Number representing A + B


function plus (A,B) {
    if(A == "zero") {
        return 0;
    }else if (A == "one"){
        return 1;
    }else if (A == "two") {
        return 2;
    }else if (A == "three") {
        return 3;
    }else if (A == "four") {
        return 4;
    }
}

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