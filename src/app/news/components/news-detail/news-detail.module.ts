import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { NewsDetailComponent } from './news-detail.component';
import { NewsDetailRoutingModule } from './news-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewsDetailRoutingModule,
    SharedModule,
  ],
})
export class NewsDetailModule { }
