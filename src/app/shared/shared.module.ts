import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    CardComponent,
    FooterComponent,
    CardListComponent,
    InputSearchComponent
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    CardComponent,
    FooterComponent,
    CardListComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
