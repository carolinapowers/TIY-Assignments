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

var stringNumbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];

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