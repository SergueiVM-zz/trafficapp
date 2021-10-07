export class SelectionItem {
  name: string;
  value: boolean;

  constructor(name: string, value: boolean) {
    this.name = name;
    this.value = value
   }

  compare(obj: SelectionItem) {
    let out = 1
    if (obj !== null) {
      if (this.name < obj.name) {
        out = -1;
      } else if (this.name > obj.name) {
        out = 1;
      } else {
        out = 0
      }
    }
    return out;
  }
}
