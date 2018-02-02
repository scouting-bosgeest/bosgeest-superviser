import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TopTrack} from "./top-track";
import {environment} from "../environments/environment";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  topTracks(): Observable<TopTrack[]> {
      return this.http.get<TopTrack[]>(environment.apiUrl + `/data/toptracks?count=60`).pipe(
          catchError(this.handleError<TopTrack[]>('topTracks', []))
      );
  }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
