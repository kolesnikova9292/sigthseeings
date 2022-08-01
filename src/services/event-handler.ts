import {ReplaySubject} from "rxjs";

export class EventHandler extends ReplaySubject<any> {

  checkedItems: any[] = [];


  constructor() {
    super();
  }

  emit(key: string, value: any) {
    if (key == 'add') {
      const indexOfItemWithThisId = this.checkedItems.indexOf(this.checkedItems.find(x => x.id === value.id));
      if (indexOfItemWithThisId > -1) {
        this.checkedItems[indexOfItemWithThisId].count++;
      } else {
        this.checkedItems.push({...value, count: 1});
      }
    }

    if (key == 'plusOne') {
      const indexOfItemWithThisId = this.checkedItems.indexOf(this.checkedItems.find(x => x.id === value.id));
      this.checkedItems[indexOfItemWithThisId].count++;

    }

    if (key == 'minusOne') {
      const indexOfItemWithThisId = this.checkedItems.indexOf(this.checkedItems.find(x => x.id === value.id));

      if (this.checkedItems[indexOfItemWithThisId].count >= 2)
        this.checkedItems[indexOfItemWithThisId].count--;
      else {
        this.checkedItems.splice(indexOfItemWithThisId, 1);
      }
    }

    super.next(this.checkedItems);
  }
}
