var events = require('../apis/github/users/carolinapowers/events.json');
var assert = require('assert');


it('should have events', function(){
    assert(events);
});


function answer () {
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    })
    return {
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length
               
        },
        other:{
            'total': answer.total - answer.PushEvent.total
        
    }
    }
}

console.log(answer.total - answer.PushEvent.total);
console.log(answer());


var theAnswer = answer();

it('should return that answer exists, and test for total events', function (){
    assert(answer);
    assert(events.length == 30);
})

it('should return the length when calling answer function', function(){
    assert.equal(theAnswer.total, 30);
})

it('should have "PushEvent", and has a total count of PushEvents', function() {
   assert(theAnswer.PushEvent);
   assert(theAnswer.PushEvent.total);
})






















/*function answer () {
    return {
        'total': events.length
    }
} //end answer


/*describe('the setup', function(){
    it('should have events', function(){
        assert(events);
    });


    it('should have events', function(){
        assert(answer);
        assert(typeof answer == 'function');
    });
});


describe('the answer', function(){
    var theAnswer = answer();
    
it('should have 30 total events', function() {
    assert(theAnswer.total === 30);
})    

it('should have some "PushEvent" entries', function() {
    assert(theAnswer.PushEvents.total);
});

});
*/