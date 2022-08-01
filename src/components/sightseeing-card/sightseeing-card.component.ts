import {Component, Input} from "@angular/core";
import {PubSubService} from "../../services/pub-sub.service";


@Component({
  selector: 'sightseeing-card',
  templateUrl: './sightseeing-card.component.html',
  styleUrls: ['./sightseeing-card.component.scss']
})
export class SightseeingCardComponent {

  @Input()
  tour: any;

  constructor(private pubSubService:PubSubService){
  }


  addTour(event: any) {
    this.pubSubService.Stream.emit('add', event);
  }

}
