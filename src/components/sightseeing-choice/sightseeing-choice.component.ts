import {Component} from "@angular/core";
import {PubSubService} from "../../services/pub-sub.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'sightseeing-choice',
  templateUrl: './sightseeing-choice.component.html',
  styleUrls: ['./sightseeing-choice.component.scss']
})
export class SightseeingChoiceComponent {


  checkedItems$?: Observable<any>;

  constructor(private pubSubService:PubSubService, private router: Router){
  }

  ngOnInit(){
    this.checkedItems$ = this.pubSubService.Stream;
  }

  changeAmount(key: string, item: any) {
    this.pubSubService.Stream.emit(key, item );
  }

  returnToList() {
    this.router.navigate([''])
  }

}
