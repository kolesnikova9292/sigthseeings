import {Injectable} from "@angular/core";
import {EventHandler} from "./event-handler";
import {SightseeingsService} from "./sightseeings.service";

@Injectable({
  providedIn: 'root',
})
export class PubSubService{
  Stream:EventHandler;

  constructor(private sightseeingsService: SightseeingsService){
    this.Stream = new EventHandler(sightseeingsService);
  }
}
