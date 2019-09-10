import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <div class="not-found">
    <div class="container">
      <div class="row">
        <div class="col-12 e-404"></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {}