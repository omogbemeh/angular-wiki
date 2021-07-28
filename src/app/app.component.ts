import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService) {}
  onSubmit(e: string) {
    this.wikipedia.search(e).subscribe((response: any) => {
      this.pages = response.query.search;
    });
    console.log(this.pages);
  }
}
