import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter();
  term = '';
  onSubmit(e: string, inp: any, event: Event) {
    event.preventDefault();
    inp.value = '';
    this.submitted.emit(this.term);
    this.term = '';
  }
}
