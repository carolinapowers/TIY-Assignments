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



