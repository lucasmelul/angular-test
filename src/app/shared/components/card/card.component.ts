import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() compact: boolean = false

  constructor(
    private router: Router,
    private newsService: NewsService
  ) {}

  goToNewDetail() {
    this.newsService.setNewDetail(this.new);
    this.router.navigate(['/news/detail'])
  }

}
