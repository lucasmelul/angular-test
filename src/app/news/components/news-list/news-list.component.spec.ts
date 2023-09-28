import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsListRoutingModule } from './news-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsService } from 'src/app/shared/services/news.service';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import dataNews from '../../../../assets/dataNews.json';
import { RouterTestingModule } from '@angular/router/testing';

class NewsServiceStub {
  news$: Observable<any>;
  getNews(){
    return of(dataNews)
  }
}

fdescribe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListComponent ],
      imports: [
        HttpClientTestingModule, 
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NewsService, useClass: NewsServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
