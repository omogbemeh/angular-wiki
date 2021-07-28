import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private url = 'https://en.wikipedia.org/w/api.php';
  constructor(private http: HttpClient) {}
  search(item: string) {
    return this.http.get(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        origin: '*',
        srsearch: item,
      },
    });
  }
}
