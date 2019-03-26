import { Component, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulargl';

  @HostListener('click', ['$event'])
  public myClick(event) {
    console.log('click app comp', event);
  }

  constructor() {
    console.log(environment.api);

  }
}
