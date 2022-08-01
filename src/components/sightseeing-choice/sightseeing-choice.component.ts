import {Component} from "@angular/core";
import {PubSubService} from "../../services/pub-sub.service";
import {filter, flatMap, map, mergeMap, Observable, of, switchMap, tap, toArray} from "rxjs";
import {Router} from "@angular/router";
import {ITour} from "../../models/tour";


@Component({
  selector: 'sightseeing-choice',
  templateUrl: './sightseeing-choice.component.html',
  styleUrls: ['./sightseeing-choice.component.scss']
})
export class SightseeingChoiceComponent {


  checkedItems$?: Observable<ITour[]>;

  constructor(private pubSubService:PubSubService, private router: Router){
  }

  ngOnInit(){
    // @ts-ignore
    this.pubSubService.Stream.pipe(
      mergeMap((data: Observable<ITour[]>) => data),
      map((x: ITour[]) => of(x.filter((z: ITour) => z.count && z?.count > 0))),
    ).subscribe((items: Observable<ITour[]>) => {
      this.checkedItems$ = items
    })
  }

  changeAmount(key: string, item: ITour) {
    this.pubSubService.Stream.emit(key, item );
  }

  returnToList() {
    this.router.navigate([''])
  }

}
