import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/news-list/news-list.module').then(m => m.NewsListModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./components/news-detail/news-detail.module').then(m => m.NewsDetailModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
