import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsService } from 'src/app/shared/services/news.service';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import dataNews from '../../../../assets/dataNews.json';

class NewsServiceStub {
  news$: Observable<any>;
  getNews(){
    return of(dataNews)
  }
}

fdescribe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListComponent ],
      imports: [
        HttpClientTestingModule, 
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NewsService, useClass: NewsServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
