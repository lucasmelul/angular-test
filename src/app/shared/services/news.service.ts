import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { New, NewsParams, ResponseNews } from '../models/news.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  TOP_HEADLINES_URL = '/top-headlines'
  selectedNew: New | undefined  

  constructor(private httpClient: HttpClient) {}

  getNews(params?: NewsParams): Observable<ResponseNews> {
    const queryParams = this.getQueryParams(params)

    return this.httpClient.get<ResponseNews>(
      `${environment.apiUrl}${this.TOP_HEADLINES_URL}?apiKey=${environment.apiKey}&language=en&${queryParams}`,
      { responseType: 'json'})
  }

  setNewDetail(data: New) {
    this.selectedNew = data;
  }

  getNewDetail() {
    return this.selectedNew
  }

  private getQueryParams(params?: NewsParams) {
    return params ? Object.keys(params)
      .filter((key: string) => params.hasOwnProperty(key) )
      .filter((key: string) => !!params[key as keyof NewsParams] )
      .map((key: string) => `${key}=${params[key as keyof NewsParams]}`)
      .join('&') : ''
  }
}
