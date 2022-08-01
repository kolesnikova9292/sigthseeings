import {Injectable} from "@angular/core";
import {EventHandler} from "./event-handler";

@Injectable({
  providedIn: 'root',
})
export class PubSubService{
  Stream:EventHandler;



  constructor(){
    this.Stream = new EventHandler();
  }



}
