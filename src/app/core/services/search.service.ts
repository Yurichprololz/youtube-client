import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  searchEmit = new EventEmitter<string>();
}
