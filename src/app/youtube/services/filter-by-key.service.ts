import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterByKeyService {
  filter :EventEmitter<string> = new EventEmitter();
}
