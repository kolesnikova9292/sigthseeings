import {Component, OnInit} from '@angular/core';
import {SightseeingsService} from "../../services/sightseeings.service";
import {debounceTime, distinctUntilChanged, filter, map, Observable, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {PubSubService} from "../../services/pub-sub.service";

@Component({
  selector: 'sightseeings',
  templateUrl: './sightseeings.component.html',
  styleUrls: ['./sightseeings.component.scss']
})
export class SightseeingsComponent implements OnInit {

  sightseeings$?: Observable<any>;

  public searchControl: FormControl = new FormControl();

  constructor(private sightseeingsService: SightseeingsService, private pubSubService:PubSubService) {
  }

  ngOnInit() {
    this.sightseeings$ = this.sightseeingsService.getSightseeings()

    this.sightseeings$.subscribe(x => {
      console.log(x)
    })

    this.searchControl.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => value.length > 2 || value == ''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this.sightseeings$ = this.sightseeingsService.getSightseeings(value)),
      ).subscribe();

    this.pubSubService.Stream.subscribe(x => {
      console.log(x);
      //this.sightseeings$?.pipe()
    })
  }
}


