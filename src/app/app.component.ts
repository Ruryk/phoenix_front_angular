import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectLoaderIsOn } from './store/loader/loader.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly store: Store = inject(Store);

  public isLoaderOn$ = this.store.select(selectLoaderIsOn);
}
