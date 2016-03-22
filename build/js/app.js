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
//May need moment.js to convert dates into suitable datatype for constructor
journalEntries.push(new Journal.Entry("My favorite day!", 03 - 31 - 2015, "I had a fantastically wonderful day. I got to see my friend, pet a puppy, and visit the moon!"));
journalEntries.push(new Journal.Entry("Goodbye, fishy", 04 - 28 - 2015, "I flushed Nemo today, and now he is free."));
journalEntries.push(new Journal.Entry("Flying Bricks", 03 - 31 - 2015, "My sister can be compared to a flying brick. "));
$(document).ready(function () {
    //LIST ALL EXISTING JOURNAL ENTRIES
    // for(var journalEntry of journalEntries) {
    //   $('#allEntries').append('<li>' + journalEntry.title + '</li>');
    //
    // }
    $('#newEntry').submit(function (event) {
        event.preventDefault();
        console.log("We're in!");
        var title = $('#title').val();
        var date = Journal.formatDate($('#date').val());
        console.log("date! = " + date);
        var entry = $('#entry').val();
        journalEntries.push(new Journal.Entry(title, date, entry));
    });
});
/// <reference path="journal-classes-interface.ts"/>
var Journal;
(function (Journal) {
    Journal.formatDate = function (date) {
        var year = date.substr(0, 4);
        var month = date.substr(5, 2);
        var day = date.substr(8, 2);
        console.log("day!" + day);
        console.log("month!" + month);
        console.log("year" + year);
        var newDate = new Date(year, month, day);
        console.log(newDate);
        return newDate;
    };
})(Journal || (Journal = {}));
