import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  currentPage: number = 1;
  limitPage: number = 15;
  @ViewChild('inputSearch', {static: true}) inputSearch: ElementRef;

  constructor(
    private router: Router,
  ) {}

  search() {
    const text = this.inputSearch.nativeElement.value;
    if(text) {
      this.router.navigate(['/news'], { queryParams: { q: text } })
    }
    return false
  }

}
