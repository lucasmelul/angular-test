import { TestBed, getTestBed, tick, fakeAsync } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { New, ResponseNews } from '../models/news.model';
import dataNews from '../../../assets/dataNews.json';
import dataNew from '../../../assets/dataNew.json';
import {of, defer} from 'rxjs';
import { HttpRequest } from '@angular/common/http';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

fdescribe('NewsService', () => {
  let service: NewsService | null;
  let injector: TestBed | null;
  let httpMock: HttpTestingController | null;
  const newMock: New = dataNew

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [NewsService]
    });

    injector = getTestBed();
    service = injector.get(NewsService)
    httpMock = injector.get(HttpTestingController)
  });

  afterAll(() => {
    service = null; 
    httpMock = null;
    injector = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET', () => {
    it('should execute get all without params', fakeAsync(() => {
      if(!service || !httpMock) return

      const result: any[] = dataNews.articles;
      const endpoint = `${environment.apiUrl}/top-headlines?apiKey=${environment.apiKey}&language=en&`
      
      service.getNews().subscribe((response: any) => {
        const data = result
        expect(response).toEqual(data);
      })

      const req = httpMock.expectOne(endpoint)
      expect(req.request.method).toBe('GET');
      req.flush(result);
    }))

    it('should execute get query param', () => {
      if(!service || !httpMock) return

      const result: any[] = dataNews.articles;
      const queryParams = {
        q: 'work',
        page: 1,
        pageSize: 7
      } 
      const endpoint = `${environment.apiUrl}/top-headlines?apiKey=${environment.apiKey}&language=en&q=${queryParams.q}&page=${queryParams.page}&pageSize=${queryParams.pageSize}`

      service.getNews(queryParams).subscribe((response: any) => {
        const data = result
        expect(response).toEqual(data);
      })

      const req = httpMock.expectOne(endpoint)
      expect(req.request.method).toBe('GET');
      req.flush(result);
    })

  })

});
