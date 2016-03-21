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
