import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ballot} from "../model/ballot";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";

@Injectable()
export class BallotService {

    constructor(private http: HttpClient) {
    }

    approve(ballot: Ballot): void {
      this.http.get(environment.apiUrl + `/approve?id=${ballot.id}`).subscribe(value => console.log(value));
    }

    reject(ballot: Ballot, reason: String): void {
        this.http.get(environment.apiUrl + `/reject?id=${ballot.id}&reason=${reason}`).subscribe(value => console.log(value))
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
