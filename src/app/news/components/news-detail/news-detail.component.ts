import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { New } from '../../../shared/models/news.model';

import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  new: New | undefined;

  constructor(
    private newsService: NewsService,
    private router: Router,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.new = this.newsService.getNewDetail()
    if(!this.new) {
      this.router.navigate(['/not-found'])
    }
  }

  goBack() {
    this.location.back()
  }
}
