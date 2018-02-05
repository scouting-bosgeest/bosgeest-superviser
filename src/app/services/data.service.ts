import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TopTrack} from "../model/top-track";
import {environment} from "../../environments/environment";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";
import {Ballot} from "../model/ballot";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  topTracks(): Observable<TopTrack[]> {
      return this.http.get<TopTrack[]>(environment.apiUrl + `/data/toptracks?count=500`).pipe(
          catchError(this.handleError<TopTrack[]>('topTracks', []))
      );
  }

    allBallots(): Observable<any> {
        return this.http.get<any>(environment.apiUrl + `/data/ballots`).pipe(
            catchError(this.handleError<Ballot[]>('topTracks', []))
        );
    }

    oneBallot(id: String): Observable<Ballot> {
      return this.http.get<Ballot>(environment.apiUrl + `/data/ballot?id=${id}`).pipe(
          catchError(this.handleError<Ballot>('oneBallot', null))
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
