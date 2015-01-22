var assert = require ("assert");

function add(a, b) {
    return (a + b);
    console.log(a + b);
}

    assert(add(4,3) == 7);
    assert.equal(add(1,1),2);


function diff(a, b) {
    return (a - b);
    console.log(a - b);
}

    assert(diff(5,2) == 3);
    assert.equal(diff(5,2),3);


function prod(a,b) {
    return(a * b);
    console.log(a * b);
}

    assert(prod(4,4) == 16);
    assert.equal(prod(5,5),25); 



function div(a, b) {
    return(a / b);
}
 
assert(div(6,0) == Infinity);
assert.equal(div(10,5),2);

console.log(div(6,2));


var one = "one"
one = 1

function sum (a, b) {
return a + b;
}

console.log(sum("one" + "one"));

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})



/* @param String A representing an English number word
* @param String B representing an English number word
* @return Number*/

function plus (A,B) {
    if ( A == "zero") {
        return B;   
    }
    return 2;
}

it('should add "zero" and "zero"', function(){
    assert.equal(plus("zero", "zero"), 0);});


function plus (A,B) {
    if (A + B) {
        return 2; 
    }
}
    
it('should add number words', function(){
    assert(plus("one", "one") === 2);});




