import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    public httpRequest: HttpRequestService,
    private http: HttpClient
  ) { }

  registerUser(body) : Observable<any>{
    console.log();
    
    // return this.httpRequest.httpRequest('POST', 'http://3.80.183.203/users/register', body)
    return this.http.post('http://3.80.183.203/users/register', body).pipe(
      catchError(this.handleError)
    );
  
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
