/// <reference path="journal-classes-interfaces.ts"/>

var journalEntries = [];

$(document).ready(function() {

  $('#newEntry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var date = new Date($('#date').val());
    var entry = $('#entry').val();
    journalEntries.push(new Journal.Entry(title, date, entry));
    console.log(journalEntries);
  });
});
