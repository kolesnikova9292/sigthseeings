import {filter, find, findIndex, isEmpty, map, mergeMap, Observable, of, ReplaySubject, switchMap, toArray} from "rxjs";
import {SightseeingsService} from "./sightseeings.service";
import {ITour} from "../models/tour";

export class EventHandler extends ReplaySubject<any> {

  allItems?: Observable<ITour[]>;

  constructor(private sightseeingsService: SightseeingsService) {
    super();
    this.create();
  }

  create() {
    this.allItems = this.sightseeingsService.getSightseeings().pipe(
      mergeMap(data => data.map(item => { return { ...item, 'count': 0  } })),
      toArray());
    this.allItems?.subscribe()
    super.next(this.allItems);
  }

  search(str: string): Observable<ITour[]> | null {
   return this.allItems?.pipe(
     mergeMap(data => data.filter(x => {
       return x.title.toLowerCase().indexOf(str.toLowerCase()) > -1
     })),
      toArray()
    ) || of([])
  }


  emit(key: string, value: ITour) {
    if (key == 'add') {
      this.allItems?.subscribe();
      const result = this.allItems?.pipe(
        map((data: ITour[]) => {
          // @ts-ignore
          data.find((x: ITour) => x.id === value.id).count++;
          return data;
        })
      );
      this.allItems = result;
      super.next(this.allItems);
    }

    if (key == 'minusOne') {

      const result = this.allItems?.pipe(

        map((data: ITour[]) => {

          // @ts-ignore
          data.find((x:ITour) => x.id === value.id).count--;
          // @ts-ignore
          if(data?.find((x: ITour) => x.id === value.id)?.count < 0)
            {
              if(data?.find((x: ITour) => x.id === value.id) !== undefined)
                (data.find((x: ITour) => x.id === value.id) as ITour).count = 0;
            }
          return data;
        })
      );

      this.allItems = result
      super.next(this.allItems);
    }
  }
}
