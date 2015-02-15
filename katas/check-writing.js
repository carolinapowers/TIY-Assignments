var assert = require('assert');

//function toEnglish(a) {
//    if (a == 1) {
//        return "one";
//    } else if (a== 2) {
//        return "two";
//    } else if (a==3) {
//        return "three";
//    } else if (a==4) {
//        return "four";
//    } else if (a==5) {
//        return "five";
//    } else if (a==6) {
//        return "six";
//    } else if (a==7){
//        return "seven";
//    } else if (a==8){
//        return "eight";
//    } else if (a==9) {
//        return "nine"; 
//    } else if (a==10) {
//        return "ten";
//    }
//    
//}

var toString=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]  

function toEnglish(n){
    return toString[n];        
} 

it('should print numbers from string', function (){
    assert.equal(toEnglish(4),"four");
})

it('should return 1 as string "one"', function() {
    assert.equal(toEnglish(1), "one");
})


it('should return "two" when 2 is entered and "not two" if any other number is entered', function () {
    assert.equal(toEnglish(2), "two");
} )


it('should return "three" when 3 is entered and "not the number 3" is any other number is entered', function() {
    assert.equal(toEnglish(3), "three");
}) 

it('should return 4 as string "four"', function(){
   assert.equal(toEnglish(4),"four");
})

it('should return 5 as string "five"', function(){
    assert.equal(toEnglish(5),"five");
})

it('should return 6 as string "six"', function (){
    assert.equal(toEnglish(6),"six");
})

it('should return 7 as string "seven"', function(){
    assert.equal(toEnglish(7),"seven");
})

it('should return 8 as string "eight"', function(){
    assert.equal(toEnglish(8),"eight");
})

it('should return 9 as string "nine"', function(){
    assert.equal(toEnglish(9),"nine");
})

it('should return 10 as strign "ten"', function () {
    assert.equal(toEnglish(10),"ten");
})