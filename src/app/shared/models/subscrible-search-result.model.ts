import { Subscription } from 'rxjs';

export interface ISubsiption {
  search: null | Subscription,
  sort: null | Subscription,
  filter: null | Subscription,
}
