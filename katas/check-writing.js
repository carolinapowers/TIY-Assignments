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

var toEnglish=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]  

function print(n){
    return toEnglish[n];        
} 

it('should print numbers from string"', function (){
    assert.equal(print(4),"four");
})

var toNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function number (string){
    return toNumber[typeof "string"];
} 

it('should print string to number', function () {
    assert.equal(number("zero"), 0);
    
})