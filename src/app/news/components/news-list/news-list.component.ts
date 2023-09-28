import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { New } from '../../../shared/models/news.model';
import { NewsService } from '../../../shared/services/news.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NEWS_CATEGORY_LIMIT } from 'src/app/utils/constant';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() category?: string

  news: New[] = [];
  currentPage: number = 1;
  limitPage: number = NEWS_CATEGORY_LIMIT;
  query: string | undefined;
  news$: Observable<New[]>

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(data => {
        this.query = data['q'];
        this.news$ = this.fetchNews()
      })
  }

  fetchNews = () => {
    return this.newsService.getNews({ 
      page: this.currentPage, 
      pageSize: this.limitPage, 
      q: this.query,
      category: this.category
    }).pipe(
      map(data => data.articles)
    )
  }
}
