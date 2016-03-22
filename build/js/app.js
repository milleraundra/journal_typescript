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
$(document).ready(function () {
    $('#newEntry').submit(function (event) {
        event.preventDefault();
        var title = $('#title').val();
        var date = new Date($('#date').val());
        var entry = $('#entry').val();
        journalEntries.push(new Journal.Entry(title, date, entry));
        console.log(journalEntries);
    });
});
/// <reference path="journal-classes-interfaces.ts"/>
var Journal;
(function (Journal) {
    Journal.formatDate = function (date) {
        console.log(date);
        // var year = date.substr(0, 4);
        // var month = date.substr(5, 2);
        // var day = date.substr(8, 2);
        // console.log("day! " + day);
        // console.log("month! " + month);
        // console.log("year! " + year);
        // var newDate = new Date(year, month, day);
        // console.log(newDate);
        return date;
    };
})(Journal || (Journal = {}));
