import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `.container { max-width: 800px; margin: 20px auto; }`
  ]
})
export class AppComponent {}