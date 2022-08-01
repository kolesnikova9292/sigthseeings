import {Component, Input} from "@angular/core";
import {PubSubService} from "../../services/pub-sub.service";
import {ITour} from "../../models/tour";


@Component({
  selector: 'sightseeing-card',
  templateUrl: './sightseeing-card.component.html',
  styleUrls: ['./sightseeing-card.component.scss']
})
export class SightseeingCardComponent {

  @Input()
  tour?: ITour;

  constructor(private pubSubService:PubSubService){
  }


  addTour(event: ITour | undefined) {
    if(event)
      this.pubSubService.Stream.emit('add', event);
  }

}
