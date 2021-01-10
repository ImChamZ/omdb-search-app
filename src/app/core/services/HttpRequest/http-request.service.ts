import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  public get(uri: string, params: HttpParams) {
    return new Promise((resolve, reject) => {
      this.http
        .get(uri, {
          params: params,
        })
        .subscribe((response: any) => {
          resolve(response);
        });
    });
  }
}
