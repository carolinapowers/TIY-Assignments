var events = require('../apis/github/users/carolinapowers/events.json');
var assert = require('assert');
console.log(Date());

    it('should tell us that events has an input', function (){
        assert(events);
    });

function answer(){
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    });
    
    return { 
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length,
        }
    };
}


console.log(answer());
console.log(events.length);
var theAnswer = answer();

    it('should return that answer exists, and test for total events', function(){
        assert(answer);
        assert(events.length === 30);
    });

    it('should return the length when calling answer function', function(){
       assert.equal(theAnswer.total, 30); 
    });

    it('should have "PushEvent", and has a total count of PushEvents', function(){
        assert(theAnswer.PushEvent);
        assert(theAnswer.PushEvent.total);
    });
