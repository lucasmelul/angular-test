import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsService } from '../shared/services/news.service';
import { New } from '../shared/models/news.model';
import { NEWS_COVER_LIMIT } from '../utils/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = ['entertainment', 'business', 'sports']
  news: New[] = [];
  currentPage: number = 1;
  limitPage: number = NEWS_COVER_LIMIT;
  news$: Observable<New[]>

  constructor(
    private newsService: NewsService,
    ) {}

  ngOnInit() {
    this.news$ = this.fetchNews()
  }

  fetchNews = () => {
    return this.newsService.getNews({ 
      page: this.currentPage, 
      pageSize: this.limitPage,
    }).pipe(
      map(data => data.articles)
    )
  }
}
