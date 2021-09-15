import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(public httpClient: HttpClient) { }

  public httpRequest (url, type, body) {
    return this.httpClient.request(type, url, { body })
    .pipe(
      catchError(error =>{
        return error
      })
    )
  }
}
 