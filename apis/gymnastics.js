var assert = require('assert'),
    _ = require('lodash'),
    events = require('../apis/github/users/carolinapowers/events.json');



var pushEvents = _.filter(events, {
        'type': 'PushEvent'
    });
    console.log(pushEvents.length);

var first = _.first(events);
var last = _.last(events);

var firstDay = first.created_at;
console.log(firstDay);

var lastDay = last.created_at;
console.log(lastDay);

var totalDays = lastDay - firstDay;
console.log(totalDays);

//var totalDays = last.created_at - first.created_at;
//console.log(first);
//console.log(last);

function answer(){
    return {
    'total': events.length,     // How many total events did you fetch?
    'PushEvent': {
      'total': pushEvents.length,  // How many total events of type `PushEvent` are there?
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

it('should assert that total of PushEvent equals pushEvents.length', function () {
    assert(theAnswer.PushEvent.total == pushEvents.length);
})

it('should assert that "pushEvents.length" equals 24', function () {
    assert.equal((pushEvents.length), 24);
})


