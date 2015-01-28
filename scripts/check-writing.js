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

//var toEnglish=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]  

function print(n){
    var toEnglish = {
        0: "zero",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
        20:"twenty",
    }
    
    return toEnglish[n];        
} 

it('should print numbers from strings"', function (){
    assert.equal(print(0),"zero");
    assert.equal(print(1),"one");
    assert.equal(print(2),"two");
    assert.equal(print(3),"three");
    assert.equal(print(4),"four");
    assert.equal(print(5), "five");
    assert.equal(print(6), "six");
    assert.equal(print(7),"seven");
    assert.equal(print(8),"eight");
    assert.equal(print(9),"nine");
    assert.equal(print(10),"ten");
    assert.equal(print(11), "eleven");
    assert.equal(print(12), "twelve");
    assert.equal(print(13), "thirteen");
    assert.equal(print(14),"fourteen");
    assert.equal(print(15),"fifteen");
    assert.equal(print(16), "sixteen");
    assert.equal(print(17), "seventeen");
    assert.equal(print(18), "eighteen");
    assert.equal(print(19),"nineteen");
    assert.equal(print(20), "twenty");
});


//it('should return 1 as string "one"', function() {
//    assert.equal(toEnglish(1), "one");
//})
//
//
//it('should return "two" when 2 is entered and "not two" if any other number is entered', function () {
//    assert.equal(toEnglish(2), "two");
//    
//} )
//
//
//it('should return "three" when 3 is entered and "not the number 3" is any other number is entered', function() {
//    assert.equal(toEnglish(3), "three");
//}) 
//
//it('should return 4 as string "four"', function(){
//   assert.equal(toEnglish(4),"four");
//})
//
//it('should return 5 as string "five"', function(){
//    assert.equal(toEnglish(5),"five");
//})
//
//it('should return 6 as string "six"', function (){
//    assert.equal(toEnglish(6),"six");
//})
//
//it('should return 7 as string "seven"', function(){
//    assert.equal(toEnglish(7),"seven");
//})
//
//it('should return 8 as string "eight"', function(){
//    assert.equal(toEnglish(8),"eight");
//})
//
//it('should return 9 as string "nine"', function(){
//    assert.equal(toEnglish(9),"nine");
//})
//
//it('should return 10 as strign "ten"', function () {
//    assert.equal(toEnglish(10),"ten");
//})