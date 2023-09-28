import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NewsService } from 'src/app/shared/services/news.service';
import { New } from '../../models/news.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() new: New
  @Input() showContent: boolean = true

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private newsService: NewsService
  ) {}

  goToNewDetail() {
    this.newsService.setNewDetail(this.new);
    this.router.navigate(['/news/detail'])
  }

}
