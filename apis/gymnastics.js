var assert = require('assert'),
    _ = require('lodash'),
    events = require('../apis/github/users/carolinapowers/events.json');

function answer(){
    var pushEvents = _.filter(events, {
            'type': 'PushEvent'
    });
    console.log(pushEvents.length);
    
    return {
    'total': events.length,     // How many total events did you fetch?
    'PushEvent': {
      'total': "",  // How many total events of type `PushEvent` are there?
      'perDay': "", // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': "",   // How many _other_ events are in the data?
      'perDay': "",  // How many per day, on average?
    }
  };
} 

var theAnswer = answer();
console.log(events.length);

it('should assert that "answer" exists', function(){
   assert(answer); 
    
});

it('should assert that "theAnswer.total" equals "events.length" exists', function(){
   assert(theAnswer.total == events.length);   
});

it('should assert that "events.length" equals 30', function () {
   assert.equal((events.length), 30); 
});


