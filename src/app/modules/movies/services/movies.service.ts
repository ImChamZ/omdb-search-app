import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/core/services/HttpRequest/http-request.service';

@Injectable({
  providedIn: 'any',
})
export class MoviesService {
  apiUri = 'http://www.omdbapi.com';

  constructor(private httpRequestService: HttpRequestService) {}

  private getHttpParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('apikey', 'b48f7f57');
    return params;
  }

  getMovieList(searchText: any) {
    let params: HttpParams = this.getHttpParams();
    params = params.append('s', searchText);
    return this.httpRequestService.get(this.apiUri, params);
  }

  getMovieDetails(movieId: string) {
    let params: HttpParams = this.getHttpParams();
    params = params.append('i', movieId);
    return this.httpRequestService.get(this.apiUri, params);
  }
}
