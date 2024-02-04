import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display: boolean = false;
  count: number = 1;
  countLogs: number[] = [];

  public displayDetails() {
    this.countLogs.push(this.count++);
    this.display = !this.display;
  }
}
