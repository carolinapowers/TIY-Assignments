var assert = require('assert');


//**
// * @param String A an English number word
// * @param String B an English number word
// * @returns Number representing A + B


function plus (A,B) {
    if(A == "zero") {
        return 0;
    }
}

it('should add "zero" and "one"', function () {
    assert.equal(plus("zero", "two"), 0);
});    