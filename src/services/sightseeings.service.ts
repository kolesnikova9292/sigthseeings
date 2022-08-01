import {Injectable} from "@angular/core";
import sightseeings from '../data/data.json';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SightseeingsService {

  getSightseeings(value: string = ''): Observable<any> {
    return of(sightseeings.tours.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) > -1));
  }

}
