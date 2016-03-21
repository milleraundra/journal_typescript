/// <reference path="journal-classes-interfaces.ts"/>

var journalEntries = [];

//May need moment.js to convert dates into suitable datatype for constructor

journalEntries.push(new Journal.Entry("My favorite day!", 03-31-2015, "I had a fantastically wonderful day. I got to see my friend, pet a puppy, and visit the moon!"));
journalEntries.push(new Journal.Entry("Goodbye, fishy", 04-28-2015, "I flushed Nemo today, and now he is free."));
journalEntries.push(new Journal.Entry("Flying Bricks", 03-31-2015, "My sister can be compared to a flying brick. "));

console.log(journalEntries);

$(document).ready(function() {
  for(var journalEntry of journalEntries) {
    $('#allEntries').append('<li>' + journalEntry.title + '</li>');

  }

  // $('#newEntry').submit(function(event) {
  //   event.preventDefault();
  //   console.log("We're in!");
  //   var title = $('title').val();
  //   var date = $('date').val();
  //   var entry = $('entry').val();
  //   console.log(title);
  //   console.log(date);
  //   console.log(entry);
  //   journalEntries.push(new Entry(title, date, entry);)
  //   console.log(journalEntries[0]);
  // });
});
