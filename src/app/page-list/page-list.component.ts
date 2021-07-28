import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages = [];
  header = [
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'wordcount',
      label: 'Word Count',
    },
    {
      key: 'snippet',
      label: 'Snippet',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
