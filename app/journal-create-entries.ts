/// <reference path="journal-classes-interfaces.ts"/>

var journalEntries = [];

//May need moment.js to convert dates into suitable datatype for constructor

journalEntries.push(new Journal.Entry("My favorite day!", 03-31-2015, "I had a fantastically wonderful day. I got to see my friend, pet a puppy, and visit the moon!"));
journalEntries.push(new Journal.Entry("Goodbye, fishy", 04-28-2015, "I flushed Nemo today, and now he is free."));
journalEntries.push(new Journal.Entry("Flying Bricks", 03-31-2015, "My sister can be compared to a flying brick. "));

$(document).ready(function() {

//LIST ALL EXISTING JOURNAL ENTRIES
  // for(var journalEntry of journalEntries) {
  //   $('#allEntries').append('<li>' + journalEntry.title + '</li>');
  //
  // }

  $('#newEntry').submit(function(event) {
    event.preventDefault();
    console.log("We're in!");
    var title = $('#title').val();
    var date = Journal.formatDate($('#date').val());
    console.log("date! = " + date);
    var entry = $('#entry').val();
    journalEntries.push(new Journal.Entry(title, date, entry));
  });
});
