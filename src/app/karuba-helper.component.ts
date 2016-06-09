import { Component } from '@angular/core';
import { HomeComponent } from './home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { GameComponent } from './+game';

@Component({
  moduleId: module.id,
  selector: 'karuba-helper-app',
  templateUrl: 'karuba-helper.component.html',
  styleUrls: ['karuba-helper.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/game/:id', component: GameComponent}
])
export class KarubaHelperAppComponent {
  title = 'karuba-helper works!';

  constructor(private router: Router) {
    
  }
}
