module Journal {

  export interface IEntry {
    title: string;
    date: Date;
    entry: string;
    stringCount(): number;
  }

  export class Entry implements IEntry {
    constructor(public title: string, public date: Date, public entry: string) {}
    stringCount() {
      var entry_array = this.entry.split(" ");
      console.log(entry_array);
      var count = entry_array.length;
      return count; 
    }
  }






}
