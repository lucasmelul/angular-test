import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsListRoutingModule } from './news-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    SharedModule,
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsListModule { }
