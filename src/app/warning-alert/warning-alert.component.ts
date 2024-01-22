import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is an success altert</p>`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
