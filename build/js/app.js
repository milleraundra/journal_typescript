var Journal;
(function (Journal) {
    var Entry = (function () {
        function Entry(title, date, entry) {
            this.title = title;
            this.date = date;
            this.entry = entry;
        }
        Entry.prototype.stringCount = function () {
            var entry_array = this.entry.split(" ");
            console.log(entry_array);
            var count = entry_array.length;
            return count;
        };
        return Entry;
    }());
    Journal.Entry = Entry;
})(Journal || (Journal = {}));
/// <reference path="journal-classes-interfaces.ts"/>
var journalEntries = [];
journalEntries.push(new Journal.Entry("My favorite day!", "Tue Mar 22 2016 16:41:31 GMT-0700 (PDT)", "I had a fantastically wonderful day. I got to see my friend, pet a puppy, and visit the moon!"));
journalEntries.push(new Journal.Entry("Goodbye, fishy", "Tue Mar 22 2016 16:41:31 GMT-0700 (PDT)", "I flushed Nemo today, and now he is free."));
journalEntries.push(new Journal.Entry("Flying Bricks", "Tue Mar 22 2016 16:41:31 GMT-0700 (PDT)", "My sister can be compared to a flying brick. "));
console.log(journalEntries);
$(document).ready(function () {
    for (var _i = 0, journalEntries_1 = journalEntries; _i < journalEntries_1.length; _i++) {
        var journalEntry = journalEntries_1[_i];
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
