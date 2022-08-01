import {Component, OnInit} from '@angular/core';
import {SightseeingsService} from "../../services/sightseeings.service";
import {debounceTime, distinctUntilChanged, filter, map, mergeMap, Observable, of, switchMap, tap, toArray} from "rxjs";
import {FormControl} from "@angular/forms";
import {PubSubService} from "../../services/pub-sub.service";
import {ITour} from "../../models/tour";

@Component({
  selector: 'sightseeings',
  templateUrl: './sightseeings.component.html',
  styleUrls: ['./sightseeings.component.scss']
})
export class SightseeingsComponent implements OnInit {

  sightseeings$?: Observable<ITour[]>;

  public searchControl: FormControl = new FormControl();

  constructor(private sightseeingsService: SightseeingsService, private pubSubService:PubSubService) {
  }

  ngOnInit() {
    this.searchControl.setValue(localStorage.getItem('input'));

    this.pubSubService.Stream.subscribe(items => {
      this.sightseeings$ = items.pipe(
        mergeMap((data: ITour[]) => data),
        filter((y: ITour) => y.title.toLowerCase().indexOf(this.searchControl.value?.toLowerCase() || '') > -1),
        toArray()
      );
    })

    this.searchControl.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => value.length > 2 || value == ''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value: string) => {
          this.sightseeings$ = this.pubSubService.Stream.search(value) || of([])
          return this.sightseeings$;
        }),
        tap(() => {
          localStorage.setItem('input', this.searchControl.value );
        })
      ).subscribe();
  }
}


