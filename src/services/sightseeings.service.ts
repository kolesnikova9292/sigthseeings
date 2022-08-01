import {Injectable} from "@angular/core";
import sightseeings from '../data/data.json';
import {Observable, of} from "rxjs";
import {ITour} from "../models/tour";

@Injectable({
  providedIn: 'root',
})
export class SightseeingsService {

  getSightseeings(value: string = ''): Observable<ITour[]> {
    return of(sightseeings.tours.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) > -1));
  }

}
