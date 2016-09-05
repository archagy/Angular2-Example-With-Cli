import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'rxjs/Rx'; 
@Component({
  selector: 'app-root',
  templateUrl: '/app/app.component.html',
  styleUrls: ['/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
