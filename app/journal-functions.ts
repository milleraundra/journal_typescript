/// <reference path="journal-classes-interface.ts"/>

module Journal {

  export var formatDate(date: string): String {
    var year = date.substr(0, 4);
    var month = date.substr(5, 2);
    var day = date.substr(8, 2);
    console.log("day!" + day);
    console.log("month!" + month);
    console.log("year" + year);
    var newDate = new Date(year, month, day);
    console.log(newDate);
    return newDate;
  }


}
