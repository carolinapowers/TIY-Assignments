var assert = require('assert'),
    _ = require('lodash'),
    events = require('../apis/github/users/carolinapowers/events.json');



var pushEvents = _.filter(events, {
        'type': 'PushEvent'
    });
   

var first = _.first(events);// lodash used to get first event.
var last = _.last(events);// lodash used to get last event.

var firstDay = Date.parse(first.created_at);// Get date from 'created_at' Parse to miliseconds.
var lastDay = Date.parse(last.created_at); // Parse to miliseconds.
var totalDays = firstDay - lastDay; //subtracting first and last day in miliseconds.

var intoDays = totalDays / (1000*60*60*24); // divided by that number to convert miliseconds to day.

var PerDay =  pushEvents.length / intoDays; // total pushevents divided by number of days.

var 

function answer(){
    return {
    'total': events.length,    
    'PushEvent': {
      'total': pushEvents.length,  
      'perDay': PerDay, 
    },
    'other': {
      'total': events.length - pushEvents.length,   
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


