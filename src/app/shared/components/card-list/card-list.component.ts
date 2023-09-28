import { Component, OnInit, Input } from '@angular/core';

import { New } from '../../models/news.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() title?: string
  @Input() news: New[]

  constructor() {}
}
